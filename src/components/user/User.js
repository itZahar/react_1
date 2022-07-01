export default function User({item,lift}) {
    const onclick = () => {
      lift(item.id)
    }
    return (
        <div>
            {item.name}
            <button onClick={onclick}></button>

        </div>
    );
}