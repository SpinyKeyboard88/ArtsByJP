/* eslint-disable react/no-unescaped-entities */
import pic1 from "../../assets/pic1.jpeg";
import pic2 from "../../assets/pic5.jpeg";
import pic3 from "../../assets/pic3.jpeg";
import pic4 from "../../assets/pic4.jpeg";
// import wood2 from '../../assets/wood-2.png';
import icon1 from "../../assets/icon3.png";
import icon2 from "../../assets/icon4.png";
import icon3 from "../../assets/icon2.png";

import before1 from "../../assets/before1.jpeg";
import before2 from "../../assets/before2.jpeg";
import after1 from "../../assets/after1.jpeg";
import after2 from "../../assets/after2.jpeg";

import before3 from "../../assets/before3.jpeg";
import after3 from "../../assets/after3.jpeg";

// import about1 from '../../assets/about1.jpeg';
import about2 from "../../assets/about2.jpeg";
import InstagramFeed from "../InstagramFeed/InstagramFeed";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container ">
          <div className="color1">
            <img className="" src={pic1}></img>
          </div>
          <div className="color1">
            <img className="" src={pic2}></img>
          </div>
          <div className="color1">
            <img className="" src={pic3}></img>
          </div>
          <div className="color1">
            <img className="" src={pic4}></img>
          </div>
        </div>
        <div className="hero-box">
          <h1>Arts By JP</h1>
          <hr></hr>
        </div>
      </section>

      <section id="services" className="just-col">
        <div>
          <h1>Services we offer</h1>
        </div>
        <div id="three-services" className="row-to-col flex-evenly">
          <div className="service-link">
            <a>
              <p className="service-title">Custom Home Furnishings</p>
              <img className="small-images" src={icon1}></img>
            </a>
            <p className="service-description">
              We can make custom furniture for every corner of your home from
              beds, nightstands, coffee tables, and vanities
            </p>
          </div>
          <div className="service-link">
            <a>
              <p className="service-title">Custom Storage Solutions</p>
              <img className="small-images" src={icon2}></img>
            </a>
            <p className="service-description">
              Need your space to be optimized and functional?
              <br></br>We also specialize in Entertainment centers, California
              Style Closets, and Kitchens{" "}
            </p>
          </div>
          <div className="service-link">
            <a>
              <p className="service-title">Custom Home Decor</p>
              <img className="small-images" src={icon3}></img>
            </a>

            <p className="service-description">
              We do more than just furnishings and storage.
              <br></br>We've worked on Bar tops, Barn Doors, Dog kennels, Stove
              tops, and more
            </p>
          </div>
        </div>
      </section>

      <section id="before-after-cards" className="row-to-col">
        <div className="card">
          <div className="card-image">
            <img src={before1}></img>
          </div>
          <div className="card-text">
            <h4>Before</h4>
            <p>Pantry with wire shelving</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={after1}></img>
          </div>
          <div className="card-text">
            <h4>After</h4>
            <p>Farmhouse style pantry with floating shelves</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={before2}></img>
          </div>
          <div className="card-text">
            <h4>Before</h4>
            <p>Empty living room nook</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={after2}></img>
          </div>
          <div className="card-text">
            <h4>After</h4>
            <p>Built-in shelving unit with base cabinets</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={before3}></img>
          </div>
          <div className="card-text">
            <h4>Before</h4>
            <p>Pantry closet with simple shelf</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={after3}></img>
          </div>
          <div className="card-text">
            <h4>After</h4>
            <p>Custom built-in wine rack</p>
          </div>
        </div>
      </section>

      <section className="row-to-col">
        <div className="half-div about-text">
          <h3>Our Beginnings</h3>
          <p>
            It started off a side business making dining tables and TV console
            for co workers and friends, turned into a true passion. Just like a
            lot of people I made a huge change after the pandemic, because I saw
            corporations have one goal to take care of themselves I realized
            that’s what I needed to do. I took my talent mixed it with my
            passion, and my attention to detail, to create this! A small
            business with big aspirations. I offer the best prices for my
            clients with the best quality.
          </p>
        </div>
        <div className="half-div about-image">
          <div className="container-image">
            <img src={about2}></img>
          </div>
        </div>
      </section>

      <section>
        <InstagramFeed limit={4} token={}></InstagramFeed>
      </section>
    </>
  );
}

export default Home;
