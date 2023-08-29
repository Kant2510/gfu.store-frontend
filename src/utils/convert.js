export function sTi(string) {
    return Number(string.slice(0, -1).replace(/\./g, ''))
}
export function iTs(int) {
    return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '₫'
}
