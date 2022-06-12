import { useContext} from 'react';
import { DataContext } from '../DataProvider'
import '../css/cart.css'

let Cart = () => {

    const { cart} = useContext(DataContext);

    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-8">
                    <div className="p-2">
                        <h4>Superheros to add to your agency:</h4>
                    </div>

                    {Object.values(cart.items).map((character, index) => {
                        return <div key={index} className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                            <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{character.obj.name}</span>
                                <div className="d-flex flex-row product-desc">
                                    <div className="size mr-1"><span className="font-weight-bold">{character.obj.sci_name}</span></div>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center qty">

                                <h5 className="text-grey mt-1 mr-1 ml-1">{character.quantity}</h5>


                            </div>
                            <div>
                                <h5 className="text-grey">${1000 * character.quantity} </h5>
                            </div>

                        </div>
                    })
                    }

                    <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                        <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">Total:</span>
                        </div>
                        <div>
                            <h4 className="text-grey">${cart.total}</h4>
                        </div>
                        <div className="d-flex align-items-center">

                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart