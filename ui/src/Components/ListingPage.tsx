import { IListing } from "../Interfaces/IListing";
import { AppDispatch, RootState,  } from "../Store";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { ILocation } from "../Interfaces/ILocation";
import { getAllLocations, getLocationById} from "../Slices/LocationSlice";

export const ListingPage: React.FC<any> = (prop) => {
  const locationInfo = useSelector((state: RootState) => state.location);
  const dispatch: AppDispatch = useDispatch();
  const [location, setLocation] = useState<any>();
  const [check, setCheck] = useState<boolean>(true);

  useEffect(() => {
  //dispatch(getAllLocations());
  setLocation(locationInfo.location);
  console.log("1" + locationInfo.locationList);
  console.log("2" + location);

  }, [locationInfo]);
 
  const [state, setState] = useState<any>([
      {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
      }
    ]);
 

    const getLocationId = () => {
      if (check) {
        dispatch(getLocationById(prop.locationId));
        //dispatch(getAllLocations());
        //setLocation(locationInfo.location);
        setCheck(false);
        console.log("function1" + check);
        console.log("function2" + location);
        console.log("function3" + locationInfo.location);
      }
    };

    getLocationId();
  
  return (<>

<DateRange
    editableDateInputs={true}
    onChange={item  => setState([item.selection])}
    moveRangeOnFirstSelection={false}
    ranges={state}
  />
  <div className="title">{prop.title}</div>
  <div className="name">{prop.name}</div>
  <div className="address">{prop.address}</div>
  <div className="type">{prop.type}</div>
  <div className="location">{location.city} {location.zip}  {location.country}</div>
  <div className="image">{prop.image}</div>
  <div className="price">{prop.price}</div>
  <div className="cap">{prop.cap}</div>
  <div className="rating">{prop.rating}</div>
  <div className="user">{prop.userId}</div>
  <div className="trending">{prop.trending}</div>
  </>);
};
