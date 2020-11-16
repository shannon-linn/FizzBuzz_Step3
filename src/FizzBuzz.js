const FizzBuzz = (num) =>  {	
	return (num.toString().includes(3)) ?	
	"lucky" :(num % 3 === 0 && num % 5 === 0) ?
		"fizzbuzz" : (num % 5 === 0 ?
				"buzz" : (num % 3 === 0 ?
					"fizz" : num)
					)
};
export default FizzBuzz;