import React from 'react';
import Image from 'next/image';
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import {addToBasket, removeFromBasket} from "../redux/basketSlice";

const CheckoutProduct = ({id, title, price, description, category, image, rating, hasPrime}) => {
    const dispatch = useDispatch();

    const addItemBasket = () => {
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            rating,
            hasPrime
        }
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = ()=> {
        dispatch(removeFromBasket({id}))
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain"/>

            {/*Middle*/}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_,i)=> (
                        <StarIcon key={i} className="h-5 text-yellow-500"/>
                    ))}
                </div>

                <p className="text-xs my-2 line-clamp-3">
                    {description}
                </p>
                <Currency quantity={price} currency="EUR"/>

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img
                            loading="lazy"
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                            alt=""/>
                        <p className="text-xs text-gray-500">GRATUIT Livraison en 1 jour</p>
                    </div>
                )}
            </div>
            {/*Right add/remove buttons*/}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemBasket} className="mt-auto button">Ajouter au panier</button>
                <button onClick={removeItemFromBasket} className="mt-auto button">Supprimer</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;