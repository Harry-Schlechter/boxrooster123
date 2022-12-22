
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
          href = "mailto:boxrooster@gmail.com"
          target = "_blank"
          rel= "noopener noreferrer">
        <h3>  📣 Contact to see the band this Christmas Eve Eve! 📣</h3>
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
        
            <iframe title="Subscribe" src="https://docs.google.com/forms/d/e/1FAIpQLScveAO1_E4r8RcGhq8-hpSHzvyAriY5QdKnFHG3kBZpbQZ0Wg/viewform?embedded=true" width="400" height="542" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            
            
          </Dialog>
      </div>
      <div className="About">
        <div>
          <h1 className="abouthead"> About the Band </h1>
        </div>
        <div>
          <p className="para">
          Boxrooster is an alternative indie rock trio based out of Long Island, New York. Early origins of the group started off with Shane O’Brien (lead guitar) and Emmett Lally (rhythm guitar). Already having been good friends, the two would jam often in O’Brien’s garage for fun. While they mostly worked on covers of songs, they slowly started to riff off melodies and other lyrics that they had written on their own time. After jamming for a few months, they decided that they wanted to form a real band but lacked a talented drummer to help them complete the group. As time went on O’Brien and Lally didn’t know if they’d ever find their elusive third member, for a band that hadn’t been given a name yet. But sure enough they were contacted by Joe Dimitri, a drummer from New Hyde Park, NY, whose friend had seen Lally’s post about needing a drummer for his band. After talking over text and seeing a few videos of Dimitri’s skillful drumming, Shane, and Emmett enthusiastically accepted Joe into the band. After Shane and Emmett returned from college for break, the trio started rehearsing covers of songs to eventually start playing gigs in the summer. As the spring came along O’Brien and Lally were hanging out one night, playing music and sharing band name ideas, when Shane jokingly came up with the name Boxrooster. And after a bit of back forth when the band brought the name to Joe, they all decided that it was the perfect name for the group. As the summer came and went, Boxrooster played shows from backyards to bars, slowly but surely making themselves known around their hometown of Floral Park, NY. As they’ve recently started to come into their own, the future looks bright for Boxrooster, who are currently working on releasing their self-titled EP “Bobby’s Backyard”, which will be released sometime in 2023. 
          </p>
          </div>
      </div>
    </div>
  );
}

export default App;
