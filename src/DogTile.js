import './DogTile.css';
import DogDescription from './DogDescription';

function DogTile() {
	return (
		<div className="first">
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBuMvSuYezLE9rwI-zOJeIOmcIGfDPqOvFA&s" />
			<h3>Cute Puppy</h3>
         <DogDescription />
		</div>
	);
}

export default DogTile;