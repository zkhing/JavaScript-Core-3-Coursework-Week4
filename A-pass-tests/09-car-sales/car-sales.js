function sales(carsSold) {
    const cars = {};
    carsSold.forEach(car => { 
      if(cars[car.make]){
        cars[car.make] += car.price;
      } else{
        cars[car.make] = car.price;
      } 
    });
  return cars;
}

module.exports = sales;
