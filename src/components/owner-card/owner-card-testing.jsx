import { useEffect } from "react";

// watch this video https://www.youtube.com/watch?v=0ZJgIjIuY7U

// THIS IS MORE EFFICIENT AS YOU WON'T BE FETCHING ALL THE DATA AT ONCE
// YOU'LL ONLY BE FETCHING DATA FOR THAT YEAR

useEffect(() => {
  fetch(`https://yourwebsite/owner/${year}`)
    .then(response => response.json())
    .then(json => console.log(json))
}, [year])

return(
  <div className="owner-card-year hidden">
    <button onClick={() => setYear(2014)} className="year">2014</button>
    <button onClick={() => setYear(2015)} className="year">2015</button>
    <button className="year">2016</button>
    <button className="year">2017</button>
    <button className="year">2018</button>
    <button className="year">2019</button>
    <button className="year">2020</button>
    <button className="year">2021</button>
    <button className="year">2022</button>
  </div>

  // watch this video https://www.youtube.com/watch?v=0ZJgIjIuY7U
)