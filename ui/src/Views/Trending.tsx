import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store";
import { ListingCard } from "../Components/ListingCard";
import { getAllListings } from "../Slices/ListingSlice";
import { IListing } from "../Interfaces/IListing";
import { Grid, GridItem, SimpleGrid, Stack } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

export const Trending: React.FC = () => {
  const listingInfo = useSelector((state: RootState) => state.listing);

  const dispatch: AppDispatch = useDispatch();

  const [listings, setListing] = useState<any>([]);
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const getListing = () => {
    if (firstLoad === true) {
      setListing(listingInfo.listing);
    }
  };

  getListing();

  useEffect(() => {
    // if(listingInfo === undefined){
    //     dispatch(getAllListings());
    // }
    setListing(listingInfo.listing);
    console.log(listingInfo);
    console.log("effect1" + firstLoad);
    console.log("effect2" + listings);
    console.log("effect3" + listingInfo.listing);
  }, [listingInfo, listings]);

  return (
    <>
      <Navbar>
        <div className="home-body">
          <div className="listing-div">
            <SimpleGrid columns={5} spacing={5}>
              {listings.map((listing: IListing) =>
                listing.trending ? (
                  <ListingCard {...listing} key={listing.id} />
                ) : (
                  <></>
                )
              )}
            </SimpleGrid>
          </div>
        </div>
      </Navbar>
    </>
  );
};
