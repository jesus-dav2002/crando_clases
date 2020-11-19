function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autos = [];
var year_0 = 2016;
var year_1 = 2021;
var AUDI = ["A4","A8","A3","TT","A5" , "A4 Allroad Quattro","A6","A7","Q3","Q5","S5","A1","A6 Allroad Quattro","S7","S6","S8","RS4","RS5", "R8", "SQ5","Q7", "RS6","RS7", "RS Q3","S3","S1", "TTS", "S4", "RS3", "SQ7", "Q2", "TTS","SQ7","S4", "S6","S7"];
var BMW = ["Serie 3","Serie 5","Serie 4","Serie 7","Z4","X5","Serie 1","X3","Serie 6","X1","X6","I3","Serie 2","X4","I8","Serie 2 Gran Tourer","Serie 2 Active Tourer","X2"];
var FORD = ["C-Max","Fiesta","Focus","Mondeo","Ka","S-MAX","B-MAX","Grand C-Max","Tourneo Custom","Kuga","Galaxy","Grand Tourneo Connect","Tourneo Connect","EcoSport","Tourneo Courier","Mustang","Transit Connect","Edge","Ka+"];
var JEEP = ["Grand Cherokee","Wrangler Unlimited","Cherokee","Wrangler","Renegade","Compass","Renegade"];

var cars = new Array(4);
cars[0] = AUDI;
cars[1] = BMW;
cars[2] = FORD;
cars[3] = JEEP;
var numero = prompt("cuantos autos quieres");

for(var i = 0; i < numero; i++)
{
    var marca_random = Math.floor(Math.random() * ((3+1) - 0) + 0);
    console.log(marca_random);
    var modelo_random = Math.floor(Math.random() * ((cars[marca_random].length + 1) - 0) + 0);
    console.log(modelo_random);
    var marca = function() 
    {   
        if(cars[marca_random] === cars[0])
        {
            return "AUDI";
        }
        else if(cars[marca_random] === cars[1])
        {
            return "BMW";
        }
        else if(cars[marca_random] === cars[2])
        {
            return "FORD";
        }
        else
        {
            return "JEEP";
        }

    };
    var modelo = cars[marca_random][modelo_random];
    var annio = Math.floor(Math.random() * ((year_1+1) - year_0) + year_0);
    autos.push(new auto(marca, modelo, annio));

    console.log(marca);
    console.log(modelo);
    console.log(annio);
}
console.log(String(cars[1]));