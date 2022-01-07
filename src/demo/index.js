import Mirine from "../lib";
const mirineInstance = new Mirine();

document.querySelector("body").innerHTML = `<h1>안녕, 세상!</h1>`;

console.log("mirineInstance", mirineInstance);

mirineInstance.testMethod();

mirineInstance.saram.isRegistrationNum("23-094-23094-20394-20394");
