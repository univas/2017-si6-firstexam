




function KmToMile(value)
{
    var number = 0.62137119;
    var mile = parseFloat(value)*parseFloat(number);

    console.log(mile.toFixed(2));

}

var km = process.argv[2];

KmToMile(km);


