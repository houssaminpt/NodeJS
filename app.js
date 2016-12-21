var fs=require('fs');

var dir="monDossier";

console.log("le dossier courant est: "+__dirname) 

fs.mkdir(dir,function(err){
	if(err){
		if(err.code=="EEXIST"){
		console.log("le dossier "+"'"+dir+"'"+ " est déja existe");
		}
	}
	else{
			console.log("le dossier "+"'"+dir+"'"+" est créé avec succès!!")
	}
})
