import './LocationLists.scss';
import LocationItem from '../LocationItem/LocationItem';

const LocationLists = ({locationAbout}) => {
    return (
        <section className='location-lists'>
            <div className='location-lists__container'>
                <ul className='location-lists__ul'>
                    {locationAbout.results && locationAbout.results.map((item) => (<LocationItem  key={item.id} item={item}/>))}
                </ul>
            </div>
        </section>
    )
};

export default LocationLists;