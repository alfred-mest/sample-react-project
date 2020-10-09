import React, { useState, useEffect } from 'react';

function Home({ setUserLoggedIn }) {

  const [starWarsCharacter, setStarWarsCharacter] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://swapi.dev/api/people/2/')
      .then(res => res.json())
      .then(data => {
        setStarWarsCharacter(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  function handleLogout() {
    setUserLoggedIn(false)
  }
  return (

    <div>
      {
        loading
          ?
          <p>Your mission is loading, Dark Lord</p>
          :
          <>
            <p>Welcome to Barad-Dûr</p>
            <p>Welcome Sauron, Master of all races</p>

            <h3>This is the new species we must conquer</h3>

            <p>{starWarsCharacter.name}</p>
            <p>{starWarsCharacter.homeworld}</p>

            <button onClick={handleLogout}>Logout</button>
          </>

      }


    </div>
  )
}

export default Home;