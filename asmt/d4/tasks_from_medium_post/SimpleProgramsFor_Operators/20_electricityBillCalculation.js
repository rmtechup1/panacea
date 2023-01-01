/**
 * Calculate electricity bill?
For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?

1 unit = 1 kWh
 */

let consumption_per_hour = 100; //100 watt hr

console.log(`Total energy bill = (consumption_per_hour * 24 * 31/1000)/10 = ${(consumption_per_hour * 24 * 31/1000)/10} Rs`);

// Total energy bill = (consumption_per_hour * 24 * 31/1000)/10 = 7.44 Rs