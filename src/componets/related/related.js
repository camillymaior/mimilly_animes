import "./related.css"


const Related = ({ props, id} ) => {

    if (!props) {
        return;
    }

    const relatedAnime = props.related_anime;

    const firstRelatedAnime = relatedAnime[id].node;

    const src = firstRelatedAnime.main_picture?.medium;
    const title = firstRelatedAnime.title;

    return (
        <div className="related-wrapper">
            <h3 className='related-title'>RELATED ANIME</h3>
            <div className="related-img-wrapper">
                <img src={src} alt="anime pic"/>
            </div>
            <div className="text-wrapper">
                <h2 className="animeTitle"> {title} </h2>
            </div>
        </div>
    );
}

export default Related;