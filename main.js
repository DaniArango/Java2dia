let boolean1 = true
let boolean2 = false

const booleanoAnd = boolean1 && boolean2;
console.log(booleanoAnd);
const booleanoOr = boolean1 || boolean2;
console.log(booleanoOr);
const booleanoNot = !boolean1;
console.log(!boolean1)
const booleanoMix0 =(boolean1 || boolean2) && (boolean1 || (!boolean1 && !boolean2))
console.log(booleanoMix0)

// Operadores
const valorDivision = 17 / 3;
console.log(valorDivision.toFixed(2));
const valorResto = 17 % 7;
console.log(valorResto)

//Logica de programacion

const A = 9;
const B ="9";
if (A == B){
    console.log('Son iguales')
}
else if(A===B)
    console.log('Extrictamente iguales')

else 
    console.log('No son iguales')

const mochila= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
 if (mochila.length >10){
    console.log('No puedo cargar con tantas cosas')
 }
 else if (mochila.length <=10 && mochila.length >=2 ){
    console.loge('Que bien voy con mi mochila')
 }
else 
    console.log('Creo q no necesito una mochila')


let contarHasta10 = 0
while (contarHasta10 !==10){
    contarHasta10++;
}
console.log(contarHasta10)

const diaFestivo = true
if(diaFestivo==true){
    console.log('Hoy no trabajo')
}

else 
    console.log('Hoy trabajo')


const arrayBucle = [];
    for(let i = 4; i < 19; i++) {
       console.log(arrayBucle.push(i));
    }

    let resultado = 0;
    for (const x of arrayBucle) {
        resultado = resultado + arrayBucle  
    }
    console.log(resultado);
    
    const array =  ['con', 'Sofia', 'aprendiendo', 'bucles'];
    for (const aprende of array) {
       console.log(aprende); 
    }
    for (const key in array) {
        console.log(key); 
    }
    
    let x = 0;
    while(x < 20) {
        if(x % 3 === 0) {
            console.log("Patata");
        }
        x++;
    }