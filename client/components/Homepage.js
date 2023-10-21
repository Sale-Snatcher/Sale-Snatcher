import React from "react";
import { Link } from 'react-router-dom';


const Homepage = () => {
  return (
    <>
      <main>
        <div>
            <ul>
              <h1>Welcome to Sale Snatcher!</h1>
              <p>Discover More, Pay Less! Your one-stop shop for unique finds and amazing deals.</p>
            <button>
              <Link
                to="/sellers"
                className="unstyled-link"
              >
                Ready to Sell?
              </Link>
            </button>
            <button>
              <Link
                to="/buyers"
                className="unstyled-link"
              >
                Find a Great Deal here!
              </Link>
            </button> 
            </ul>
        </div>
      </main>
    </>
  )
};

export default Homepage;