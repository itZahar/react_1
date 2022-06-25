function Launch({launch:{mission_name,launch_year,links:{mission_patch_small}}}) {
    return (
         <div>
            <h2>Mission - {mission_name}</h2>
            <h2>Year - {launch_year}</h2>
            <img src={mission_patch_small} alt={'Patch of current mission'}/>
            <hr/>
         </div>
    );
}
export {Launch}