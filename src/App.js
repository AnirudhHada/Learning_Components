import './App.css';
import DogTile from "./DogTile";

function App() {
  return (
  <section className="puppy">
    <DogTile description="d1" text="Cute Puppy 1" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnefXdGJmT3iNGhPtNsJkweQbwlN_R-ThOg&s" />
    <DogTile description="d2" text="Cute Puppy 2" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBuMvSuYezLE9rwI-zOJeIOmcIGfDPqOvFA&s"/>
    <DogTile description="d3" text="Cute Puppy 3" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-b6PHBe_opvTNI426lUatVgDGcGMbtZws0g&s"/>
    <DogTile description="d4" text="Cute Puppy 4" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2v0swPF_7eqqBeKIBjiPLojMs9AJwWVXXrA&s"/>
    <DogTile description="d5" text="Cute Puppy 4" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmdNH9QZx1byqXSg96V5Xat2XwK56DJeojA&s">
      <p>This is children prop</p>
    </DogTile>
  </section>
  );
}

export default App;
