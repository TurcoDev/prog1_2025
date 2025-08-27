console.log(Date.now());

function showDateTime(){
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();

    console.log(`${dia}/${mes}/${anio} ${horas}:${minutos}`);
    

    // console.log(fecha.getDate());
    

    // console.log(fecha.toString());         // Muestra fecha y hora en formato legible
    // console.log(fecha.toLocaleDateString()); // Solo la fecha, según configuración regional
    // console.log(fecha.toISOString());        // Formato estándar ISO 8601
    
}

showDateTime()