export class Game {

  constructor(
    public id: number,
    public title: string,
    public imageUrl: string,
    public description: string,
    public rented: boolean,
    public returnDate: Date,
    public user: string
  ) {}

}
