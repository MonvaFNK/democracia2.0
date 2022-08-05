let dog = "black";
console.log(dog);

const data = {
    'Ley1': 300000,
    'Ley2': 195514,
    'Ley3': 80460,
};

const ctx = document.getElementById('votaciones').getContext('2d');

const myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: Object.keys(data),
		datasets: [
			{
				label: 'Votaciones Totales',
				data: Object.values(data),
			},
		],
        
	},
    options:{
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',  // Bar 1
            'rgba(54, 162, 235, 0.5)',  // Bar 2
            'rgba(255, 206, 86, 0.5)',  // Bar 3
        ],
        borderWidth: 2,
        borderColor: 'black'
    },
});

const values = Object.values(data);

const sum = values.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);

document.getElementById("total").innerHTML = "El total de votos registrados es "+sum;
/* document.getElementById(total).innerHTML = sum; */