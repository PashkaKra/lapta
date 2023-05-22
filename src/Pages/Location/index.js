import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import "./style.css"

const Location = () => {
    const [blockState, setBlockState] = useState(1);
    const BLOCK_ACTIVE = 'blockWrap active';
    const BLOCK_DISACTIVE = 'blockWrap'; 
    /*const [block1ClassName, setblock1ClassNameWrap] = useState('blockWrap active');
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
    }*/

    return(
        <div id="location" className='location'>
            <YMaps>
                <div>
                    <h1>Локации</h1>
                    <div className='tabMenu'>  
                        <a title="осень-зима" href="#1" onClick={() => setBlockState(1)} className={blockState?'active':''}>Осень - зима:</a>
                        <a title="весна-лето" href="#2" onClick={() => setBlockState(0)} className={blockState?'':'active'}>Весна - лето:</a>
                    </div>    
                    <div className='mapWrapper'>
                        <div className={blockState?BLOCK_ACTIVE:BLOCK_DISACTIVE}>
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
                    
                        <div className={blockState?BLOCK_DISACTIVE:BLOCK_ACTIVE}>
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