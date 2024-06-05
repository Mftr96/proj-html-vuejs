export default {
    getImg(path) {
        let risultato = new URL(`../../assets/photo/` +path, import.meta.url);
        return risultato.href;
    },
    GetConsole(){
        console.log("ciao")
    }
} 