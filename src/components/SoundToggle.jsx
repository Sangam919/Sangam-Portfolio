import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const SoundToggle = ({ muted, onToggle }) => {
  return (
    <button
      className="sound-toggle"
      onClick={onToggle}
      aria-label={muted ? 'Enable sound' : 'Disable sound'}
      title={muted ? 'Enable sound effects' : 'Mute sound effects'}
    >
      {muted ? <FaVolumeMute /> : <FaVolumeUp />}
    </button>
  );
};

export default SoundToggle;
