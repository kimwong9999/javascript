let calculate = (operator) =>
{
/*
	do the calcualtion
*/
	let n1 = document.getElementById('input1').value;
	let n2 = document.getElementById('input2').value;

	let validation = validate(n1, n2);

	if (validation['ok'])
	{

		switch (operator)
		{
			case '+' : result = parseInt(n1) + parseInt(n2);break;
			case '-' : result = parseInt(n1) - parseInt(n2);break;
			case '*' : result = parseInt(n1) * parseInt(n2);break;
			case '/' : result = parseInt(n1) / parseInt(n2);break;

		}

		document.getElementById('result').value = n1 + operator + n2 + ' = ' + result;

	}
	else
	{
		document.getElementById('message').value = validation['message'];
	}


}
let validate = (n1, n2) =>
{
/*
	validate the input numbers
*/
	let status = {ok:false, message:''}

	 n1 == ''	? status['message'] = 'Please enter the first number'
	:n2 == '' 	? status['message'] = 'Please enter the second number'
	:!parseInt(n1)	? status['message'] = 'Please enter a non zero number'
	:!parseInt(n2)	? status['message'] = 'Please enter a non zero number'
	:status['ok'] = 'true';

	return status;
}
let clearInputs = () =>
{
/*
	clears the input, result and message fields
*/
	document.getElementById('input1').value = '';
	document.getElementById('input2').value = '';
	document.getElementById('result').value = '';
	document.getElementById('message').value = '';
}