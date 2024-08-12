import { Injectable } from '@angular/core';
import { HouseItem } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() { }

  async getAllHousingLocations() : Promise<HouseItem[]> {
     const data = await fetch(this.url);
     return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HouseItem | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`)
  }
}
