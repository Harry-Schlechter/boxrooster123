
import mainlogo from './mainlogo.jpg';
import gang from './gang.jpg'
import insta from './insta.png';
import tiktok from './tiktok.png';
import './App.css';
import React from "react";
import Dialog from '@mui/material/Dialog';

function App() {
  document.body.style.backgroundColor = "black"

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
      <div className="one">
        <a
          className="links"
          href="https://instagram.com/boxroosterr"
          target="_blank"
          rel="noopener noreferrer"
        >
           <img src={insta} className="linky" alt="example"/>
        </a>
      </div>
      <div className="one">
        <img src={mainlogo} className="App-logo" alt="logo" />
      </div>
      <div className="one">
        <a
          className = "links"
          href = "https://vm.tiktok.com/ZTRVotr7G/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tiktok} className="linky" alt="example" />
        </a>
        </div>
      </header>
      <div className="announce">
        <a 
          className="head2"
          href = "boxrooster.com"
          target = "_blank"
          rel= "noopener noreferrer">
        <h3>  📣 Subscibe below to stay up to date! 📣</h3>
        </a>
      </div>
      <div className="middlephoto">
        <img src={gang} className="gang" alt="logo"/>
      </div>
      <div className="footer">
        <a href="mailto:boxrooster@gmail.com">
          <button className="but"> Contact & Booking </button>
        </a>
          <button className="but" onClick={handleOpen} > Subscribe </button>
          <Dialog open = {open} onClose={handleClose}>
        
            <iframe title="Subscribe" src="https://docs.google.com/forms/d/e/1FAIpQLScveAO1_E4r8RcGhq8-hpSHzvyAriY5QdKnFHG3kBZpbQZ0Wg/viewform?embedded=true" width="350" height="542" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            
            
          </Dialog>
      </div>
      <div className="About">
        <div>
          <h1 className="abouthead"> About the Band </h1>
        </div>
        <div>
          <p className="para">
          Boxrooster is an alternative indie rock trio based out of Long Island, New York. The band started with two friends Emmett Lally (lead singer) and Shane O’Brien (lead guitar) jamming in O’Brien’s garage for fun. They evolved from playing covers, to writing their own music, to deciding to start a band. They lacked a talented drummer and began to search for one on their quest to start a band.
          </p>
          <p className="para">
          As their quest continued, they became hopeless that they would ever find their elusive third member. But to their luck, Joe Dimitri from New Hyde Park, NY reached out to Lally and O’Brien through social media. It didn’t take long for Dimitri’s drumming to impress them and he officially joined the band.
          </p>
          <p className="para">
          After Lally and O’Brien returned from college for winter break of 2021, the trio got right to work rehearsing. While they were practicing one night, O’Brien jokingly proposed Boxrooster as the band name and the rest is history. The summer of 2022 was incredibly productive for Boxrooster as they played backyards, bars, and birthday parties making a name for themselves around Floral Park. The future looks bright for Boxrooster as they are currently working on an EP, “Bobby’s Backyard”, set to be realased in 2023. 
          </p>
          <p className="para">
          The band is geared up and ready to go for the summer of 2023. Be sure to contact and book them before time runs out! Boxrooster looks forward to seeing you at one of their next shows.
          </p>
          </div>
      </div>
    </div>
  );
}

export default App;
