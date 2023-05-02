import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Location = () => {
    return(
        <div id="location">
            <YMaps>
                <div>
                    <h1>Локации</h1>
                    <p>Осень - зима:</p>
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

                    <p>Весна - лето:</p>
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
            </YMaps>
        </div>
    );
}

export default Location;