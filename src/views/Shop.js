import axios from 'axios';
import {useState, useContext} from 'react'
import { DataContext }from '../DataProvider'

let Shop = () => {
    const getMarvelData = async () => {
        let data = await axios.get('https://marvelapi-donovan-app.herokuapp.com/api/MarvelCharacters')
        //console.log(data)
        //'https://marvelapi-donovan-app.herokuapp.com/api/MarvelCharacters'
        return data.status === 200 ? data.data: null
    }

    const loadMarvelData = async () => {
        let  data = await getMarvelData();
        console.log(data)
        setCharacters(data);
    }

    const [character, setCharacters] = useState(() => {loadMarvelData();});

    const { cart, setCart } = useContext(DataContext);

    const buySuperhero = character => {
        let mutableCart = { ...cart};
        mutableCart.size++;
        mutableCart.total += 1000;
        mutableCart.items[character.id] ? 
        mutableCart.items[character.id].quantity++ :
        mutableCart.items[character.id] = {'obj': character, 'quantity' : 1}
        console.log(mutableCart);

        setCart(mutableCart);
    }

    return (
        <div className = 'container'>
            <div className = 'row justify-content-center'>
                <h1>Donovan Superhero Shop</h1>
            </div>
            <div className = 'row'>
                {typeof character === 'object' && character[0] ? character.map((character, index) => {
                    return <div key={index} className="card m-3" style={{width: 18 + 'rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">{character.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{character.super_power}</li>
                        <li className="list-group-item">{character.name} has appeared in the comic {character.name} edition {character.comics_appeared_in}</li>
                    </ul>
                    <div className="card-body">
                        <button onClick={()=>{buySuperhero(character)}} className="card-link float-right"> Add to Cart</button>
                    </div>
                    </div>
                })

                     : <h1>Retrieving Super Heroes</h1> }
            </div>
         </div>
    )
}

export default Shop;