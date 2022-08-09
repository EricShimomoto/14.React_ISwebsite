import { useState } from "react";

const Home = () => {

    const [initialName, setName]=useState("Eric");

    const handleClick = () => {
        setName("Kidorino");
    }



    return ( 
       <div className="home">
            <h2>Homepage</h2>
            <p>{initialName}</p>
            <button onClick = {handleClick}>ClickMe</button>
       </div> 
     );
}
 
export default Home;