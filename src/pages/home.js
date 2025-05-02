import Dream from "../assets/dream.jpeg";
import Button from "../components/button";
import BasicExample from "../components/coreNavbar";
import coreNavbar from "../components/coreNavbar"

export default function Home (){
    return(
        <>
        <div>
            <BasicExample></BasicExample>
          <img src= {Dream}></img>  
          <Button name="Ondrej"/>
          </div>
        </>
    );
    
}

