const gameBoard = (()=>{
    const divovac= document.createElement("div");
    const winan=document.querySelector(".ancm");
    const bggr=document.querySelector(".grbg");
    const btnpa=document.querySelector(".textforwin");
    divovac.classList.add("maindiv")
    let xo=[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    const createGB=()=>{
        
        divovac.classList.add("divgb");
        for (let i = 1; i <= 9; i++) {
            let divtoadd = document.createElement("div");
            divtoadd.classList.add(`div${i}`);
            divtoadd.classList.add(`${i}`);
            divtoadd.classList.add("alldiv");
            divovac.appendChild(divtoadd);
            
        }
        const divGB = document.querySelector(".divmid");
        divGB.appendChild(divovac);
    }
    let moves=0;
    const checkWin=()=>{
        moves++;
        //prvi red
        if(xo[0][0]==1 && xo[0][1]==1 && xo[0][2]==1)
        {
            winX();
        }
        else if(xo[0][0]==2 && xo[0][1]==2 && xo[0][2]==2)
        {
            winO();
        }
        //drugi red
        else if(xo[1][0]==1 && xo[1][1]==1 && xo[1][2]==1)
        {
            winX();
        }
        else if(xo[1][0]==2 && xo[1][1]==2 && xo[1][2]==2)
        {
            winO();
        }
        //treci red
        else if(xo[2][0]==1 && xo[2][1]==1 && xo[2][2]==1)
        {
            winX();
        }
        else if(xo[2][0]==2 && xo[2][1]==2 && xo[2][2]==2)
        {
            winO();
        }
        //prva kolona
        else if(xo[0][0]==1 && xo[1][0]==1 && xo[2][0]==1)
        {
            winX();
        }
        else if(xo[0][0]==2 && xo[1][0]==2 && xo[2][0]==2)
        {
            winO();
        }
        //druga kolona
        else if(xo[0][1]==1 && xo[1][1]==1 && xo[2][1]==1)
        {
            winX();
        }
        else if(xo[0][1]==2 && xo[1][1]==2 && xo[2][1]==2)
        {
            winO();
        }
        //treca kolona
        else if(xo[0][2]==1 && xo[1][2]==1 && xo[2][2]==1)
        {
            winX();
        }
        else if(xo[0][2]==2 && xo[1][2]==2 && xo[2][2]==2)
        {
            winO();
        }
        //glavna dio
        else if(xo[0][0]==1 && xo[1][1]==1 && xo[2][2]==1)
        {
            winX();
        }
        else if(xo[0][0]==2 && xo[1][1]==2 && xo[2][2]==2)
        {
            winO();
        }
        //sporedna dio
        else if(xo[0][2]==1 && xo[1][1]==1 && xo[2][0]==1)
        {
            winX();
        }
        else if(xo[0][2]==2 && xo[1][1]==2 && xo[2][0]==2)
        {
            winO();
        }
        else if(moves==9)
        {
            btnpa.textContent="TIE!";
            winan.style.zIndex="5";
            winan.style.opacity="100%";
            bggr.style.zIndex="3";
            bggr.style.opacity="75%";
            btnpa.style.zIndex="5";
            btnpa.style.opacity="100%";
        }
    }
    const winX=()=>{
            btnpa.textContent="PLAYER X WON!";
            winan.style.zIndex="5";
            winan.style.opacity="100%";
            bggr.style.zIndex="3";
            bggr.style.opacity="75%";
            btnpa.style.zIndex="5";
            btnpa.style.opacity="100%";
        if(xo[0][0]==2 && xo[0][1]==2 && xo[0][2]==2)
        {
            btnpa.textContent="PLAYER O WON!";
            winan.style.zIndex="5";
            winan.style.opacity="100%";
            bggr.style.zIndex="3";
            bggr.style.opacity="75%";
            btnpa.style.zIndex="5";
            btnpa.style.opacity="100%";
        }
    }
    const winO=()=>{
        btnpa.textContent="PLAYER O WON!";
        winan.style.zIndex="5";
        winan.style.opacity="100%";
        bggr.style.zIndex="3";
        bggr.style.opacity="75%";
        btnpa.style.zIndex="5";
        btnpa.style.opacity="100%";
}
    const playerX=(element,broj)=>{
        const prio1= document.querySelector(`.${element}`)
        prio1.textContent="X";
        if(broj==1){
            xo[0][0]=1;
            checkWin();
        }
        else if(broj==2){
            xo[0][1]=1;
            checkWin();
        }
        else if(broj==3){
            xo[0][2]=1;
            checkWin();
        }
        else if(broj==4){
            xo[1][0]=1;
            checkWin();
        }
        else if(broj==5){
            xo[1][1]=1;
            checkWin();
        }
        else if(broj==6){
            xo[1][2]=1;
            checkWin();
        }
        else if(broj==7){
            xo[2][0]=1;
            checkWin();
        }
        else if(broj==8){
            xo[2][1]=1;
            checkWin();
        }
        else if(broj==9){
            xo[2][2]=1;
            checkWin();
        }

    }
    const playerO=(element,broj)=>{
        const prio1= document.querySelector(`.${element}`)
        prio1.textContent="O";
        if(broj==1){
            xo[0][0]=2;
            checkWin();
        }
        else if(broj==2){
            xo[0][1]=2;
            checkWin();
        }
        else if(broj==3){
            xo[0][2]=2;
            checkWin();
        }
        else if(broj==4){
            xo[1][0]=2;
            checkWin();
        }
        else if(broj==5){
            xo[1][1]=2;
            checkWin();
        }
        else if(broj==6){
            xo[1][2]=2;
            checkWin();
        }
        else if(broj==7){
            xo[2][0]=2;
            checkWin();
        }
        else if(broj==8){
            xo[2][1]=2;
            checkWin();
        }
        else if(broj==9){
            xo[2][2]=2;
            checkWin();
        }
    }
    return {createGB, playerX, playerO};
})();
gameBoard.createGB();
let counter=0;
const boardDiv = document.querySelectorAll(".alldiv");
boardDiv.forEach(element => {
    element.addEventListener("click", () => {
        if(counter==0 && element.textContent=="")
        {
            counter=1;
            gameBoard.playerX(element.classList[0],element.classList[1]);
            
        }
        else if(element.textContent==""){
            counter=0;
            gameBoard.playerO(element.classList[0],element.classList[1]);
        }
    });
});