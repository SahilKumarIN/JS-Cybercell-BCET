let emptyArray = [];

let array5Elems = [1 , 2 , 3 , 4 , 5 , 6];

let lengthArray5Elems = array5Elems.length;

console.log(array5Elems[0] , "\n" , array5Elems[parseInt(lengthArray5Elems/2)] , "\n" , array5Elems[lengthArray5Elems - 1]);

let mixedDataTypes = ["sahil" , 66 , true , "cybercell" , "bcet" , "javascript"];

let mixedDataTypesLength = mixedDataTypes.length;

let itCompanies = [
    "Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"
];

let itCompaniesLength = itCompanies.length;

console.log(itCompanies);

console.log(itCompaniesLength);

console.log(itCompanies[0] , "\n" , itCompanies[parseInt(itCompaniesLength/2)] , "\n" , itCompanies[itCompaniesLength - 1]);

itCompanies.forEach((company)=>{
    console.log(company);
})

for(let i = 0 ; i < itCompaniesLength ; i++){
    
    console.log(itCompanies[i].toUpperCase());
}

let sentItCompanies = "";
for(let i = 0 ; i < itCompaniesLength ; i++ ) {
    sentItCompanies += (i == itCompaniesLength - 1) ? `and ${itCompanies[i]} ` : itCompanies[i]+ " , ";
}
sentItCompanies += "are big IT companies.";
console.log(sentItCompanies);

itCompanies.forEach((company)=>{
    let count  = 0;
    Array.from(company).forEach((letter)=>{
        if(letter.toLowerCase() == 'o') count += 1;
    })
    if(count > 1){
        console.log(company);
    }
})


// itCompanies.sort();
// itCompanies.reverse()
// console.log(itCompanies);

console.log(itCompanies.slice(0 , 3));
console.log(itCompanies.slice(itCompanies.length - 3 , itCompanies.length));
console.log(itCompanies.slice(Number(itCompanies.length / 2) , Number(itCompanies.length / 2)+1));
itCompanies = []