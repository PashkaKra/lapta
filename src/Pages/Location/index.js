import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import "./style.css"

const Location = () => {
    const [blockState, setBlockState] = useState(1);
    const [block1ClassName, setblock1ClassNameWrap] = useState('blockWrap active');
    const [block2ClassName, setblock2ClassNameWrap] = useState('blockWrap');
    const changeTab = (tab) => {
        if(tab !== blockState){
            if(tab === 1){
                setblock1ClassNameWrap('blockWrap active');
                setblock2ClassNameWrap('blockWrap');
            }
            else{
                setblock1ClassNameWrap('blockWrap');
                setblock2ClassNameWrap('blockWrap active');
            }
            setBlockState(tab);
        }
    }

    return(
        <div id="location" className='location'>
            <YMaps>
                <div>
                    <h1>Локации</h1>
                    <div className='tabMenu'>  
                        <a title="осень-зима" href="#1" onClick={() => changeTab(1)}>Осень - зима:</a>
                        <a title="весна-лето" href="#2" onClick={() => changeTab(2)}>Весна - лето:</a>
                    </div>    
                    <div className='mapWrapper'>
                        <div className={block1ClassName}>
                            <p>Играем в спортивном зале, м. Щукинская, ул.Маршала Василевского, д.9, к.1</p>
                            <Map
                                defaultState={{
                                    center: [55.805068, 37.470042],
                                    zoom: 15,
                                    controls: ["zoomControl", "fullscreenControl"],
                                }}
                                modules={["control.ZoomControl", "control.FullscreenControl"]}
                            >
                                <Placemark defaultGeometry={[55.805068, 37.470042]} />
                            </Map>
                        </div>
                    
                        <div className={block2ClassName}>
                            <p>Играем на огороженной площадке школы на улице, м. Октябрьское поле, ул. Берзарина, д.24 </p>
                            <Map 
                                defaultState={{
                                    center: [55.789917, 37.478172],
                                    zoom: 15,
                                    controls: ["zoomControl", "fullscreenControl"],
                                }}
                                modules={["control.ZoomControl", "control.FullscreenControl"]}
                            >
                                <Placemark defaultGeometry={[55.789917, 37.478172]} />
                            </Map>
                        </div>
                    </div>
                </div>
            </YMaps>
        </div>
    );
}

export default Location;