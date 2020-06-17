


function addi(n)
{
	result =0;
	for(var i = 0;i<=n;i++){
		result = result + i;
	}
	
	console.log(result);
}

function addiRec(n)
{
	if(n == 1)
		return 1;
	return addiRec(n-1) + n;
}


addi(4);
console.log(addiRec(4));