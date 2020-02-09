const string = `
.skin *{
    
    box-sizing: border-box;margin:0; padding:0;
}
.skin *::before,*::after{
    box-sizing: border-box;
}
.skin {

position: relative;
}
body{
    background-color: yellow;
}
.nose {
    border: 10px solid black;    
    position: absolute;
    width: 0px;
    height: 0px;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    border-color: black transparent transparent; 
    z-index: 1;
        
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(20deg);
    }
    66%{
        transform: rotate(-20deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: 50% 100%;
    animation: wave 300ms infinite linear;
}
.yuan {
    width: 20px;
    height: 6px;
    position: absolute;
    top: -16px;
    border-radius: 6px 6px 0px 0px;
    background-color: black ;
    left: -10px;
}

.eye {
    border: 1px solid  rgb(46, 46, 46);
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    border-radius: 50%;
    background: rgb(46, 46, 46);
    
}
.eye::before{
    content: '';
    display: block;
    border:1px solid white;
    width: 27px;
    height: 27px;
    background: white;
    border-radius: 50%;
    position: relative;
    left:10px;
    top: 4px;


}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.mouth{
    width: 120px;
    height: 150px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -60px;
    overflow: hidden;

}
.mouth .up{
    position: relative;
    top: -10px;
    z-index: 1;
    background-color:yellow;
}
.mouth .up .lip.left{
    border: 2px solid black;
    width: 60px;
    height: 30px;
    border-radius:0 0 0 28px ;
    border-color: yellow yellow  black black;
    transform: rotate(-25deg);
    display: block;
    position: absolute;
    background: yellow;
    

}
.mouth .up .lip.right{
    border: 2px solid black;
    width: 60px;
    height: 30px;
    border-radius: 0  0 28px 0 ;
    border-color:yellow black black yellow;
    transform: rotate(25deg);
    display: block;
    position: absolute;
    left: 60px;
    background: yellow; 

}
.mouth .down{
    width: 100%;
    height: 120px;    
    overflow: hidden;
    margin-top:4px;
}
.mouth .down .yuan1{
    height: 500px;
    width: 120px;
    position: absolute;
    margin-top: -380px;    
    border-radius: 90px/320px;
    background: rgb(153, 1, 10);
    border: 1px solid black;
    overflow: hidden;
    
}
.mouth .down .yuan1 .yuan2{
    height: 110px;
    width: 100px;
    position: absolute;  
    background: rgb(255, 72, 95);
    bottom: -5px;
    left: 50%;
    margin-left: -50px;    
    border-radius: 50%;
    
}


.face{
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background:rgb(254, 0, 0) ;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    margin-top: 190px;
    z-index: 3;
}
.face.left{
    transform: translateX(-130px);
}
.face.right{
    transform: translateX(130px);
}


`
export default string;