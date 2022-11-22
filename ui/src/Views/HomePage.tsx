import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store";
import { ListingCard } from "../Components/ListingCard";
import { getAllListings } from "../Slices/ListingSlice";
import { IListing } from "../Interfaces/IListing";
import {Grid, GridItem, SimpleGrid, Stack} from '@chakra-ui/react';

export const HomePage: React.FC = () => {

    const listingInfo = useSelector((state:RootState) => state.listing); 

    const dispatch:AppDispatch = useDispatch();

    const [listings, setListing] = useState<any>([]);
    const [firstLoad, setFirstLoad] = useState<boolean>(false);
 const getListing =() => {
     if(firstLoad === false){
         dispatch(getAllListings());
         setListing(listingInfo.listing);
         setFirstLoad(true);
         console.log("function1" + firstLoad);
         console.log("function2" + listings);
         console.log("function3" + listingInfo.listing);
     }
 }

    getListing();

    useEffect(() => {
        // if(listingInfo === undefined){
        //     dispatch(getAllListings());
        // }
        setListing(listingInfo.listing);
        console.log(listingInfo)
        console.log("effect1" + firstLoad);
        console.log("effect2" + listings);
        console.log("effect3" + listingInfo.listing);
       
    },[listingInfo, listings]);


    
    return(
        <>
            <div className="home-body">
               <div className = "listing-div">
              
               <SimpleGrid columns = {5} spacing = {5} >
                {listings ? listings.map((listing: { id: any; }) => {
                    return <ListingCard {...listing} key = {listing.id}/>
                }): <h1> Loading... </h1>}
    </SimpleGrid>
               </div>
            </div>
        </>
    )
}