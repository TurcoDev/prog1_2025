

const generateColorHexa = () => {
    const arrayHexa = "0123456789ABCDEF"
    // console.log(arrayHexa[15]);
    let result = "#";

    for (let index = 1; index <= 6; index++) {
        let posRamHexa = Math.floor(Math.random() * 16)
        result += arrayHexa[posRamHexa];
    }
    return result;
}

console.log(generateColorHexa());

const colorPallet = (cant) =>  {
    const result = [];
    for (let index = 0; index < cant; index++) {
        result.push(generateColorHexa())
    }

    return result;
}

console.log(colorPallet(10));
