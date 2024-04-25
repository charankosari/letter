import React from 'react';
import Image from './image4.jpg'
import audioFile from './kushi.mp3';
import Image2 from './image.jpg'
function File() {
  return (
    <div style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', height: '100vh',overflow:'-moz-hidden-unscrollable', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Happy Birthday, My Dearest Friend!</h1>
        <h2 style={styles.subHeading}>Nainuuu...</h2>
        <p style={styles.paragraph}>
          On this special day, I want to take a moment to express how incredibly lucky I feel to have you as my closest friend. Manam daily chats or calls maatladukokapoyna, unnantha sepu I feel complete with you Nainuuu 😍. Goa lo start ayyina mana parichayam ippudu ila nadustundi, chaala memories chaala happy moments, we not just laughed but cried, shared our happy moments and sorrow moments. Ninnu nen entha ardam cheskunnano nak telidhu but nak ardam ayyinantha varak nen cheyagalgedhi nikosam yeppudyna chestha, any kind of help, I'm there to support you Nainuuu... Nak nuv enthavarak telso antha knowledge tho nik aa book ("<i>You Only Live Once</i>") ni Gift chesa, I hope you liked it and adds some value to your life 🤗. Inthaku mundu kuda I wrote my feelings on a paper and sent you, but this time in a different way. And niitho nen chaala nerchukunna, ninnu chusi admire ayya, niitho chaala temples ki vellina aee ammay tho anni tiragaledu na life lo, I wish ela manam inka ennennoo explore cheyali nainuu. And remember you owe me a tour. Poetically, Your friendship is like the warmth of a cup of masala chai on a rainy day - comforting, refreshing, and always leaves me wanting more. Just like the vibrant colors of Holi, your presence adds joy and excitement to me. Thank you for being the Rahul to my Anjali, the Jai to my Veeru, and the Raj to my Simran. I wish you to be my Hermoine and I'll definitely be your Harry. Here's to many more years of friendship, laughter, and unforgettable memories. Happy birthday, dear friend!
        </p>
        <div>
        </div>
        <div style={styles.signature}>
          <p>With love and gratitude,</p>
          <p><span>Your friend, living legend, <br /> <strong style={{color:'#ff006e'}}>Chinnu </strong> </span></p>
        </div>
      </div>
      <audio src={audioFile} controls autoPlay loop style={{ display: 'none' }}>
          Your browser does not support the <code>audio</code> element.
        </audio>
    </div>
  );
}

export default File;

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    background: `url(${Image})`,
    height:'100vh',
    width:"100%",
    backgroundRepeat:'no-repeat'
  },
  content: {
    backgroundColor: '#ffcad4',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
  },
  heading: {
    textAlign: 'center',
    color: '#8e24aa',
    fontSize: '28px',
    marginBottom: '20px',
  },
  subHeading: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#8e24aa',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '14px',
    lineHeight: '1.6',
    marginBottom: '20px',
    textAlign: 'justify',
  },
  signature: {
    textAlign: 'right',
    fontStyle: 'italic',
    marginTop: '20px',
  },
};
