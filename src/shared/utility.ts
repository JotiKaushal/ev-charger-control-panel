function getShortName(name: string){

if(name.length > 10){
    return `${name.slice(0,30)}...`
}
return name;
}



export {getShortName}