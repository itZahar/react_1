//є API от SpaceX
// https://api.spacexdata.com/v3/launches/
// потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
import {useEffect, useState} from "react";

import {Launch} from "../launch/Launch";

function Launches() {
    let [launches,setLaunches] = useState([])
    useEffect(()=> {fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunches(value.filter(value => value.launch_year !== '2020')))
        },[])
    return (
        <div>
            {launches.map((launch,index)=> <Launch
                key={index}
                launch={launch}
                />
            )}
        </div>
    );
}
export {Launches}