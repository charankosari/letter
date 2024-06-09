import React from "react";
import Image from "./image.png";
import audioFile from "./music.mp3";
function File() {
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        height: "100vh",
        overflow: "-moz-hidden-unscrollable",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={styles.content}>
        <h1 style={styles.heading}>Happy Birthday Papammmm....😘</h1>
        <p style={styles.paragraph}>
          Today is such a special day because it's the day you came into this
          world. Your presence lights up my life in ways words can hardly
          describe..... Just one text from you can turn my whole day around and
          make me smile like a kid🫶🏻!!! I still remember how nervous I was
          before meeting you for the first time. My heart was racing, and I had
          butterflies in my stomach, but from the moment we met, everything felt
          right. It was as if all my fears melted away, and I knew you were the
          one for me.👉🏻👈🏻❤️ woahhhh...its been 9 months alreadyyy!!!🥹 aahh aahhh
          9 months matlab apan milkey 9 months😂😂..anyways jokes apart,thank
          you for tolerating all my cringe🤌🏻.We share so many sweet and silly
          moments together and I cherish every single one of them. They remind
          me of how lucky I am to have you by my side🥰. On your special day, I
          want to remind you just how much you mean to me.You are not just my
          partner now,u are more than that.you are the first thought after I
          wake up and the last thought I sleep with.you are part of my soul, you
          are the heartbeat of my heart..you complete me papamm🥹💕
          <br />
          🧿...bas bas bohot bada mssg hogaya😂😂..
          <br />
          <strong>Here’s a little love poem just for you:</strong>
          <br />
          <strong>"In your arms, I've found my home,</strong>
          <br />
          <strong>In your heart, I've found my love,</strong>
          <br />
          <strong>With every text, you make me smile,</strong>
          <br />
          <strong>With every word, you lift me above.</strong>
          <br />
          <strong>Through all the cringy, sweet things we do,</strong>
          <br />
          <strong>I promise forever, it's me and you." and and and</strong>
          <br /> <strong style={{color:'#f72585'}}>I LOVE YOUUUUUU VISHALLLL JIIII😘❤️</strong>
        </p>
        <div></div>
      </div>
      <audio src={audioFile} controls autoPlay loop style={{ display: "none" }}>
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  );
}

export default File;

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    background: `url(${Image})`,
    height: "100vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    margin: "0",
  },
  content: {
    backgroundColor: "#ffcad4",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "auto",
  },
  heading: {
    textAlign: "center",
    color: "#8e24aa",
    fontSize: "28px",
    marginBottom: "20px",
  },
  subHeading: {
    textAlign: "center",
    fontStyle: "italic",
    color: "#8e24aa",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "20px",
    textAlign: "justify",
  },
  signature: {
    textAlign: "right",
    fontStyle: "italic",
    marginTop: "20px",
  },
};
