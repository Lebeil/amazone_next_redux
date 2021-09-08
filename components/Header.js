import React from 'react';
import Image from 'next/image';
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signout, useSession} from "next-auth/client";


const Header = () => {
    const [session] = useSession();

    return (
        <header>
            {/*Top nav*/}
            <div className="flex items-center bg-amazon_blues p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/*Search bar*/}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text"/>
                    <SearchIcon className="h-12 p-4"/>
                </div>
                {/*Right items*/}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link" onClick={!session ? signIn : signout}>
                        <p>{session ? `Bonjour, ${session.user.name}` : "Se connecter"}</p>
                        <p className="font-extrabold md:text-sm">Compte et listes</p>
                    </div>

                    <div className="link">
                        <p>Retours</p>
                        <p className="font-extrabold md:text-sm">et Commandes</p>
                    </div>

                    <div className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>

                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline font-extrabold md:text-sm">Panier</p>
                    </div>
                </div>
            </div>


            {/*Bottom nav*/}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blues-light text-white text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1"/>
                    Toutes
                </p>
                <p className="link">Courses alimentaires</p>
                <p className="link">Amazon Basics</p>
                <p className="link">Idées cadeaux</p>
                <p className="link hidden lg:inline-flex">Santé et produits d'hygiène</p>
                <p className="link hidden lg:inline-flex">Chèques-cadeaux</p>
                <p className="link hidden lg:inline-flex">Guide de l'acheteur</p>
            </div>
        </header>
    );
};

export default Header;