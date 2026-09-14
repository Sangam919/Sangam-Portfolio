import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { terminalCommands, personal, projects, experience, skillCategories } from '../data/portfolio';

const Terminal = ({ isOpen, onClose, soundEngine }) => {
  const [history, setHistory] = useState([
    { type: 'system', text: `Welcome to Sangam's Portfolio Terminal v2.0` },
    { type: 'system', text: 'Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [matrixEffect, setMatrixEffect] = useState(false);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  const processCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    soundEngine?.play('click');

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }
    if (trimmed === 'exit') {
      onClose();
      return;
    }
    if (trimmed === 'resume') {
      const a = document.createElement('a');
      a.href = personal.resumePath;
      a.download = 'Sangam_Srivastav_Resume.pdf';
      a.click();
      setHistory(h => [...h, { type: 'input', text: cmd }, { type: 'output', text: '📄 Downloading resume...' }]);
      return;
    }

    // Dynamic commands
    let output = '';
    if (terminalCommands[trimmed]) {
      if (terminalCommands[trimmed] === '__MATRIX_EFFECT__') {
        setMatrixEffect(true);
        setTimeout(() => setMatrixEffect(false), 3000);
        output = '🟢 Matrix mode activated for 3 seconds...';
      } else {
        output = terminalCommands[trimmed];
      }
    } else if (trimmed === 'about' || trimmed === 'cat about.md') {
      output = `# Sangam Srivastav\n${personal.bio}\n\n📧 ${personal.email}\n🔗 ${personal.linkedin}\n💻 ${personal.github}`;
    } else if (trimmed === 'projects') {
      output = projects.map(p => `${p.featured ? '⭐' : '  '} ${p.title}\n   ${p.tech.join(', ')}\n   ${p.github}${p.demo ? '\n   🔗 ' + p.demo : ''}`).join('\n\n');
    } else if (trimmed === 'skills') {
      output = skillCategories.map(c => `┌ ${c.name}\n${c.skills.map(s => `│  ● ${s.name}`).join('\n')}\n└──`).join('\n\n');
    } else if (trimmed === 'experience') {
      output = experience.map(e => `▸ ${e.title} @ ${e.company}${e.date ? ` (${e.date})` : ''}\n  ${e.tech.join(', ')}`).join('\n\n');
    } else if (trimmed === 'contact') {
      output = `📧 Email: ${personal.email}\n🔗 LinkedIn: ${personal.linkedin}\n💻 GitHub: ${personal.github}\n📱 Phone: ${personal.phone}`;
    } else if (trimmed === 'ls') {
      output = 'home/  about/  experience/  projects/  skills/  certifications/  education/  contact/';
    } else {
      output = `Command not found: ${trimmed}\nType "help" for available commands.`;
    }

    setHistory(h => [...h, { type: 'input', text: cmd }, { type: 'output', text: output }]);
  }, [onClose, soundEngine]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      setCmdHistory(h => [input, ...h]);
      setHistoryIdx(-1);
      processCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIdx < cmdHistory.length - 1) {
        const newIdx = historyIdx + 1;
        setHistoryIdx(newIdx);
        setInput(cmdHistory[newIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const newIdx = historyIdx - 1;
        setHistoryIdx(newIdx);
        setInput(cmdHistory[newIdx]);
      } else {
        setHistoryIdx(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const cmds = ['help','about','skills','projects','experience','contact','resume','hire','whoami','neofetch','ls','clear','exit'];
      const match = cmds.find(c => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    } else if (e.key === 'Escape') {
      onClose();
    } else {
      soundEngine?.play('terminalType');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="terminal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="terminal-window"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="t-dot red" onClick={onClose} />
                <span className="t-dot yellow" />
                <span className="t-dot green" />
              </div>
              <span className="terminal-title">sangam@portfolio:~</span>
            </div>

            <div className="terminal-body" ref={scrollRef} onClick={() => inputRef.current?.focus()}>
              {matrixEffect && <div className="matrix-rain" aria-hidden="true" />}

              {history.map((entry, i) => (
                <div key={i} className={`terminal-line ${entry.type}`}>
                  {entry.type === 'input' && <span className="terminal-prompt">$ </span>}
                  {entry.type === 'system' && <span className="terminal-prompt sys">→ </span>}
                  <pre>{entry.text}</pre>
                </div>
              ))}

              <div className="terminal-input-line">
                <span className="terminal-prompt">$ </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="terminal-input"
                  spellCheck={false}
                  autoComplete="off"
                  aria-label="Terminal input"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;
