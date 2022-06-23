function RickAndMorty(props) {
    let {id,name,status,species,gender,image} = props
    return(
        <div className={'wrap'}>
            <h1> {id},{name}</h1>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image}/>
        </div>
    )
}
export default RickAndMorty