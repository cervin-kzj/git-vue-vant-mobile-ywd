export default (price,n,format) => {
    return format+(price*1).toFixed(n);
}