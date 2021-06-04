class Videogame {
  //constructor
  constructor(model, type, age, weight, date) {
    (this.model = model),
      (this.type = type),
      (this.age = age),
      (this.weight = weight),
      (this.date = date);
  }
  changeModel(newModel) {
    this.model = newModel;
  }
  changeDate(newDate) {
    this.date = newDate;
  }
}
export default Videogame;
