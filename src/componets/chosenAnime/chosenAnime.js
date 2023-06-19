import "./chosenAnime.css"

const ChosenAnime = ({ props} ) => {

    if (!props) {
        return;
    }

    return (
        <div className="mainContent-wrapper">
            <div className="img-wrapper">
                <img src={props?.main_picture?.medium} alt="anime pic"/>
            </div>
            <div className="text-wrapper">
                <h2 className="animeTitle"> {props.title} </h2>
                <p className="synopsis"> {props.synopsis} </p>
            </div>
            
        </div>
    );
}

export default ChosenAnime;