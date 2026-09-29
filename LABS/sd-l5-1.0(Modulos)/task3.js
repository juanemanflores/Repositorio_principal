export function ageCalculator(año, mes, dia) {
    const añoNac = Number(año);
    const mesNac = Number(mes);
    const diaNac = Number(dia);

    const hoy = new Date();
    const añoHoy = hoy.getFullYear();
    const mesHoy = hoy.getMonth() + 1;
    const diaHoy = hoy.getDate();

    let edad = añoHoy - añoNac;

    if (mesHoy < mesNac || (mesHoy === mesNac && diaHoy < diaNac)) {
        edad = edad - 1;
    }

    return edad;
}