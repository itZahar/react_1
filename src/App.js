import './App.css';
import Character from "./characters/simpson/Character";
import CharecterRickandMorty from "./characters/rickAndMorty/CharecterRickandMorty";

function App() {
  return (
    <div>
      <CharecterRickandMorty
        id = {'1'}
        name = {'Rick Sanchez'}
        status={"Alive"}
        species={'Human'}
        gender={'Male'}
        image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
      />
      <CharecterRickandMorty
          id = {'2'}
          name = {'Morty Smith'}
          status={"Alive"}
          species={'Human'}
          gender={'Male'}
          image={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
      />
      <CharecterRickandMorty
          id = {'686'}
          name = {'Mr. Nimbus`Squid'}
          status={"Dead"}
          species={'Animal'}
          gender={'Male'}
          image={"https://rickandmortyapi.com/api/character/avatar/686.jpeg"}
      />
      <CharecterRickandMorty
          id = {'17'}
          name = {'Annie'}
          status={"Alive"}
          species={'Human'}
          gender={'Female'}
          image={"https://rickandmortyapi.com/api/character/avatar/17.jpeg"}
      />
      <CharecterRickandMorty
          id = {'16'}
          name = {'Amish Syborg'}
          status={"Dead"}
          species={'Alien'}
          gender={'Male'}
          image={"https://rickandmortyapi.com/api/character/avatar/16.jpeg"}
      />
      <CharecterRickandMorty
          id = {'20'}
          name = {'Ants in my Eyes Johnson'}
          status={"unknown"}
          species={'Human'}
          gender={'Male'}
          image={"https://rickandmortyapi.com/api/character/avatar/20.jpeg"}
      />


    <Character
        name = {'Bart'}
        pic = {'https://i.pinimg.com/originals/98/b3/71/98b371cd43ead599d22bb40590df8287.jpg'}
    />
    <Character
    name = {'Homer'}
    pic ={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
    />
    <Character
    name = {'Marge'}
    pic = {'https://www.freeiconspng.com/thumbs/marge-simpson-png/marge-simpson-png-3.png'}
    />
    <Character
    name = {'Lisi'}
    pic = {'https://i.pinimg.com/564x/4c/84/3b/4c843b7dd1ab93aed4fd48bc003851e2.jpg'}
    />
    <Character
    name = {'Maggie'}
    pic = {'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}
    />
    </div>
  );
}
export default App;
