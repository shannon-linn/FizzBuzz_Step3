import './App.css';
import FizzBuzz from './FizzBuzz.js';
const numbers = Array.from(Array(20).keys());
const FizzBuzzReport = (num) =>  {
let report = {};	
num.map((value,index) =>{
	let FizzBuzzValue = (FizzBuzz(value+1));
	let GroupingValue = ((isNaN(FizzBuzzValue)) ?
	FizzBuzzValue: "integer");
	return ((report[GroupingValue]) ?
	(report[GroupingValue] = report[GroupingValue] +1) : (report[GroupingValue] = 1)
	);
});
return report;
}
function App() {
return (
    <div className="App">
	<ul className="fizzBuzz">
	{numbers.map((value,index) => { return (
	< li key={index+1} className={"listItem_"+FizzBuzz(value+1)}>
	{FizzBuzz(value+1).toString()}
</li>)})}
	</ul>
	<div className="report">
	<h1>FizzBuzz Report</h1>
	{JSON.stringify(FizzBuzzReport(numbers))}
	</div>
    </div>
  );
}
export default App;
