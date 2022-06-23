function Simpsons(props) {
    let {name,pic} = props;
    return (
        <div>
            <h2> {name}</h2>
            <img src={pic} alt={'simpsons family'}/>
        </div>)
}
export default Simpsons
