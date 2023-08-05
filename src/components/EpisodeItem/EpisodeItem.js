import './EpisodeItem.scss';

const EpisodeItem = ({item}) => {
    return (
        <div className='episode'>
            <div className='episode__container'>
                <ul className='episode__ul'>
                    <li className='episode__li'>
                        <a href={item.url} className='episode__span'><span className='episode__span'>NAME: {item.name}</span></a>
                        <span className='episode__span'>AIR_DATE: {item.air_date}</span>
                        <span className='episode__span'>EPISODE: {item.episode}</span>
                        <ul className='episode__ul-residents'>CHARACTERS: {item.characters.map((item) => (
                        <li key={item.toString()}><a href={item} className='episode__li-residents'><span>{item}</span></a></li>))
                        }
                        </ul>
                        <a href={item.url} className='episode__span'><span className='episode__span'>URL: {item.url}</span></a>
                        <span className='episode__span'>CREATED: {item.created.slice(0, 10)}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default EpisodeItem;