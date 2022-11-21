import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store";
import { ListingCard } from "../Components/ListingCard";
import { getAllListings } from "../Slices/ListingSlice";
import { IListing } from "../Interfaces/IListing";

export const HomePage: React.FC = () => {

    const listingInfo = useSelector((state:RootState) => state.listing); 

    const dispatch:AppDispatch = useDispatch();

    const [listings, setListing] = useState<any>([]);

// const getListing =() => {
//     if(listings.length === 0){
//         dispatch(getAllListings);
//     }
// }

// getListing();

    useEffect(() => {
        if(listingInfo === undefined){
            dispatch(getAllListings);
        }
        console.log(listingInfo)
       setListing(listingInfo.listing);
    },[listingInfo]);


    
    return(
        <>
            <div className="home-body">
               <div className = "listing-div">
                {listings ? listings.map((listing: { id: any; }) => {
                    return <ListingCard {...listing} key = {listing.id}/>
                }): <h1> Loading... </h1>}
               </div>
            </div>
        </>
    )
}