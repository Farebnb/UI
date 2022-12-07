import { propNames } from "@chakra-ui/react";
import { IListing } from "../Interfaces/IListing";
import { AppDispatch, RootState,  } from "../Store";
import { useDispatch, useSelector } from "react-redux";
import { getLocationById } from "../Slices/LocationSlice";
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

export const ListingPage: React.FC<any> = (prop) => {
  const locationInfo = useSelector((state: RootState) => state.location);
  const dispatch: AppDispatch = useDispatch();
  
  dispatch(getLocationById(prop.locationId));
 
  const [state, setState] = useState<any>([
      {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
      }
    ]);
 
  
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
  <div className="location">{locationInfo.location?.city} {locationInfo.location?.country}  {locationInfo.location?.zip}</div>
  <div className="image">{prop.image}</div>
  <div className="price">{prop.price}</div>
  <div className="cap">{prop.cap}</div>
  <div className="rating">{prop.rating}</div>
  <div className="user">{prop.userId}</div>
  <div className="trending">{prop.trending}</div>
  </>);
};
