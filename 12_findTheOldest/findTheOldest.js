const findTheOldest = function(people) {
    let date = new Date()
    return people.reduce((accumulator, item)=>{
        //Define both together
        let itemDeathYear = item.yearOfDeath;
        let accumulatorDeathYear = accumulator.yearOfDeath;
        if(item.yearOfDeath == undefined){
            itemDeathYear = date.getFullYear()
        }
        if(accumulator.yearOfDeath == undefined){
            accumulatorDeathYear = date.getFullYear()
        }
        let age_item = itemDeathYear - item.yearOfBirth
        let age_accumulator = accumulatorDeathYear - accumulator.yearOfBirth
        console.log(`age ${item.name}: ${age_item} age_accumulator: ${age_accumulator}` )
        if( age_item > age_accumulator ){ //item's age - accumulator's age
            accumulator = item
        }
        return accumulator
    })
};

// Do not edit below this line
module.exports = findTheOldest;
