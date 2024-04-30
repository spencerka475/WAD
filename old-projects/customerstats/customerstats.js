// Kael s. 4/15/24 customer statistics

const hour1 = parseInt(prompt("customer amount during hour 1"));
const hour2 = parseInt(prompt('customer amount during hour 2'));
const hour3 = parseInt(prompt('customer amount during hour 3'));
const hour4 = parseInt(prompt('customer amount during hour 4'));

//process

const totalcustomers= hour1 + hour2 + hour3 + hour4;

const averagecustomers = totalcustomers / 4;
const msg =` 1st hour - ${hour1}
2nd hour - ${hour2}
3rd hour - ${hour3}
4th hour - ${hour4}

total - ${totalcustomers}

average - ${averagecustomers}`
//output 
alert(msg);
