import './LocationItem.scss';

const LocationItem = ({item}) => {
    return (
        <div className='location'>
            <div className='location__container'>
                <ul className='location__ul'>
                    <li className='location__li'>
                        <a href={item.url} className='location__span'><span className='location__span'>NAME: {item.name}</span></a>
                        <span className='location__span'>TYPE: {item.type}</span>
                        <span className='location__span'>DIMENSION: {item.demension}</span>
                        <ul className='location__ul-residents'>RESIDENTS: {item.residents.map((item) => (
                        <li key={item.toString()}><a href={item} className='location__li-residents'><span>{item}</span></a></li>))
                        }
                        </ul>
                        <a href={item.url} className='location__span'><span className='location__span'>URL: {item.url}</span></a>
                        <span className='location__span'>CREATED: {item.created.slice(0, 10)}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default LocationItem;