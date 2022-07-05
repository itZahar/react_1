export default function User({item,lift}) {
    return (
        <div>
            {item.name}
            <button onClick={()=>lift(item.id)}></button>
        </div>
    );
}