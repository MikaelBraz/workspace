
// Unidimensional
let array = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995];


console.log("Array completo:", array);

console.log("Tamanho do Array:", array.length);

let jsInfo = array[array.indexOf("JS")];
console.log("Informação JS:", jsInfo);


let arrayAsString = array.join(",");
console.log("Array como String:", arrayAsString, typeof arrayAsString);

let arrayWithSlashSeparator = arrayAsString.replace(/,/g, '/');
console.log("Array com separador /:", arrayWithSlashSeparator);

array.unshift("IOS");
console.log("Array com IOS no início:", array, "Tamanho atualizado:", array.length);


// Bidimensional


let arrayBidimensional = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995]
  ];
  

  console.log("Array Bidimensional completo:", arrayBidimensional);
  

  console.log("Tamanho do Array Bidimensional:", arrayBidimensional.length);
  

  let ano2013 = arrayBidimensional[2][1];
  console.log("Ano 2013:", ano2013);

  arrayBidimensional[1][2] = "JavaScript";
  

  arrayBidimensional[2].splice(arrayBidimensional[2].indexOf("Java"), 1);
  

  arrayBidimensional[2].push("pipoca");
  
  console.log("Array Bidimensional modificado:", arrayBidimensional);
  

