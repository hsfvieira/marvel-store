export function formatPrice(valor) {
    const valorString = valor.toString()
    return `$ ${valorString.replace(/\./, ',')}`
}