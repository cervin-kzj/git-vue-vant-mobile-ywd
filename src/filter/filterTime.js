export default (time,format) => {
    if(format==1){
        let date = new Date(parseInt(time));

        let y=date.getFullYear();
        let m=((date.getMonth()+1)+" ").padStart(2,"0");
        let d=(date.getDate()+" ").padStart(2,"0");
        var hour = (date.getHours() + "").padStart(2, "0")
        var minutes = (date.getMinutes() + "").padStart(2, '0')
        var seconds = (date.getSeconds() + "").padStart(2, "0");
        return `${y}-${m}-${d} ${hour}:${minutes}:${seconds}`;
    }
}