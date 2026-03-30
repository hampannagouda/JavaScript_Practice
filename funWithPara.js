var triangle = (b,h)=>(0.5 *(b*h));
console.log(triangle(5,10));

var rectangle = (b,h)=>(b*h);
console.log(rectangle(5,10));

var trapezoid = (a,b,h)=>(0.5 *((a+b)*h));
console.log(trapezoid(2,5,10));

var eclipse = (b,h)=>(3.14 *(b*h));
console.log(eclipse(5,10));

var square = (b,h)=>(b*h);
console.log(square(5,10));

var parallelogram = (b,h)=>(b*h);
console.log(parallelogram(5,10));

var circle = (r)=>(3.14 *(r*r));
console.log(circle(5));

var sector = (r,theta)=>(0.5 *(r*r*theta));
console.log(sector(5,10));