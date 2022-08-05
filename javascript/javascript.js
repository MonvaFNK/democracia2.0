let dog = "black";
console.log(dog);
google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Ley', 'Votos'],
        ['Ley 1', 39000],
        ['Ley 2', 45000],
        ['Ley 3', 250000],
        ['Ley 4', 658000],
        ['Ley 5', 25000]
    ]);
    
    var options = {
        title: 'Leyes activas a votacion',
        backgroundColor: 'gray',
    };
    
    var chart = new google.visualization.ColumnChart(document.getElementById('votaciones'));
    chart.draw(data, options);
    
    }
