 export const formatCurrency = (quantity: number) => {
    return new Intl.NumberFormat(
        'en-US',
        { style: 'currency', currency: 'USD' }
    ).format(quantity) // multiplicamos por 100 para obtener centavos

}