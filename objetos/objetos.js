

const plato1 = {
    nombre: "milangueza",
    sinTACC: false,
    porciones: 10,
    ingredientes: ["pan", "huevo", "harina"],
    acompaniamiento: {
        papas: true,
        mayo: false
    },

    servir: () => {
        return "Sin carne por favor."; 
    }
}


console.log(plato1.ingredientes);

console.log(plato1.servir());

const plato2 = {
    nombre: "bife de yoricho a cabasho",
    sinTACC: true,
    porciones: 15,
    ingredientes: ["carne", "extra carne", "huevo"],
    acompaniamiento: {
        papas: true,
        mayo: true
    },

    servir: () => {
        return "Mucha caraaarrrne."; 
    }
}

const pedido = [plato1, plato2];

function listaSinTACC(listaPlatos) {
    listaResultado = [];
    for (let index = 0; index < listaPlatos.length; index++) {
        const element = listaPlatos[index];
        if (element.sinTACC) {
            listaResultado.push(element);
        } 
    }
    return listaResultado;
}

console.log(listaSinTACC(pedido));

console.log(listaSinTACC([plato1, plato1, plato2, plato1, plato2]))

const conversionJSON = JSON.stringify(plato1);
console.log("Este es el jason", conversionJSON);

const objetoDesdeJSON = JSON.parse(conversionJSON);
console.log(objetoDesdeJSON);

