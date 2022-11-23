export interface IListing{
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