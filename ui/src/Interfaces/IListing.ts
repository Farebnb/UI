import { IDate } from "./IDate"

export interface IListing extends IDate{
    id: number,
    title: string,
    address: string,
    type: string,
    locationId: number,
    image: string,
    price: number,
    guests: number,
    cap : number,
    rating: number
    userId: number,
    trending: boolean
}