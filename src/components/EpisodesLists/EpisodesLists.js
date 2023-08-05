import './EpisodesLists.scss';
import EpisodeItem from '../EpisodeItem/EpisodeItem';
         
const EpisodesLists = ({episodesAbout}) => {
    return (
        <section className='episodes-lists'>
            <div className='episodes-lists__container'>
                <ul className='episodes-lists__ul'>
                    {episodesAbout.results && episodesAbout.results.map((item) => (<EpisodeItem  key={item.id} item={item}/>))}
                </ul>
            </div>
        </section>
    )
};

export default EpisodesLists;