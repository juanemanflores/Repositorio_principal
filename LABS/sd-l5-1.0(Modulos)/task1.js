export function costCalculator(costo) {
    const monto = Number(costo);
    const interes = monto * 0.01;
    return monto + interes + 3;
}
