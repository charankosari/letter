import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './music.mp3';
import Image from './image.png';
import { useNavigate } from 'react-router-dom';

const LoveLetter = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', height: '100vh',overflow:'-moz-hidden-unscrollable', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
        <div className="flap"></div>
        <div className="body"></div>
        <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
          To My Dearest Future Husband,<br/>
          VISHALLLL... JIIII🤩 
          <br/>
          A Very Happy Birthday to you 🎂🍰🎈🎉🎊 <br/> <br/>
          <button className='button' onClick={()=>{
            navigate('/letter')
          }}>Click to view full letter</button>
        </div>
        <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
      </div>
    </div>
  );
};

export default LoveLetter;
