
let domCode = document.querySelector('#code')
    domCode.innerHTML = result || ''
    let n = 0
    let id = setInterval(()=>{
        n += 1
        domCode.innerHTML = Prism.highlight(result.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = result.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if(n >= code.length){
            window.clearInterval(id)
        }
}, 10)

var result = `/*  
 * 我将用纯 css 来画一只哆啦A梦
 * 首先我需要一张白纸
 */
.code{
    width: 100%;
    height: 100%;
    padding: 16px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
.paper{
    width: 50%;
    height: 100vh;  
}
.doraemen{
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

/*
* 请看右边，现在可以画图了
* 先从头部画起
*/

.head{
    border: 2px #333 solid;
    width: 310px;
    height: 310px;
    border-radius: 50%;
    background: #029EE3;
}

/* 画眼睛 */

.head .eye-left,.head .eye-right{
    border: 2px #333 solid;
    width: 60px;
    height: 80px;
    background: #fff;
    border-radius: 50%;
}
.head .eyeball-left,.head .eyeball-right{
    width: 17px;
    height: 17px;
    background: #000;
    border-radius: 50%;
}

/* 画脸部 */

.head .face{
    border: 2px #333 solid;
    height: 230px;
    width: 270px;
    background: #fff;
    border-top-left-radius: 45% 60%;
    border-top-right-radius: 45% 60%;
    border-bottom-left-radius: 60% 85%;
    border-bottom-right-radius: 60% 90%;  
}

/*鼻子部分*/

.head .nose{
    border: 2px #333 solid;
    width: 44px;
    height: 44px;
    background: #D80617;
    border-radius: 50%;
}
.head .nose>.nose-light{
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
}

/* 嘴巴部分 */

.head .lips-left,.head .lips-right{
    border: 2px #333 solid;
    width: 44px;
    height: 64px;
    background: #fff;
}
.head .lips-left{
    border-top-left-radius: 75% 50%;
    border-bottom-left-radius: 75% 50%;
    border-right: none;
}
.head .lips-right{
    border-top-right-radius: 75% 50%;
    border-bottom-right-radius: 75% 50%;
    border-left: none;
}
.head .lips-center-wrapper{
    width: 156px;
    height: 20px;
}
.head .lips-center{
    border: 2px #333 solid;
    height: 75px;
    width: 250px;
    border-top-left-radius: 65%;
    border-top-right-radius: 65%;
    background: #E80016;
}
.head .lips-center-left-wrapper,.head .lips-center-right-wrapper{
    width: 36px;
    height: 20px;
}
.head .lips-center-left,.lips-center-right{
    border: 2px #333 solid;
    height: 20px;
    width: 65px;
    background: #fff;
}
.head .lips-center-left{
    border-bottom-left-radius: 45%;
    border-bottom-right-radius: 60%;
}
.head .lips-center-right{
    border-bottom-left-radius: 60%;
    border-bottom-right-radius: 45%;
}
.head .mustache-left1,.head .mustache-left2,.head .mustache-left3,
.head .mustache-right1,.head .mustache-right2,.head .mustache-right3{
    width: 80px;
    border: 1px #333 solid;
}
.head .mustache-center{
    height: 58px;
    width: 2px;
    background: #333;
}
.head .mouse-wrapper{
    width: 240px;
    height: 102px;
}
.head .mouse{
    border: 2px #333 solid;
    height: 150px;
    width: 240px;
    background: #E80016;
    border-bottom-left-radius: 50% 100%;
    border-bottom-right-radius: 50% 100%;
}
.head .mouse-shade{
    height: 14px;
    width: 156px;
    background: #fff; 
}

/* 加上舌头 */

.head .tongue-wrapper{
    height: 150px;
    width: 240px;
    background: #E80016;
    border-bottom-left-radius: 50% 100%;
    border-bottom-right-radius: 50% 100%;
}
.head .tongue-left,.head .tongue-right{
    border: 2px solid #333;
    width: 80px;
    height: 60px;
    background: #EF6B1C;
}
.head .tongue-left{
    border-top-left-radius: 50% 80%;
    border-top-right-radius: 50% 80%;
}
.head .tongue-right{
    border-top-left-radius: 50% 80%;
    border-top-right-radius: 50% 80%;
}
.head .tongue-shade{
    width: 80px;
    height: 60px;
    background: #EF6B1C;
    border-bottom: none;
    border-top-left-radius: 50% 80%;
    border-top-right-radius: 50% 80%;
}

/*
* 头部完成了
* 下面开始画身体
*/

.body{
    width: 310px;
    height: 310px;
}

/* 先画个铃铛 */

.body .bell-rope-wrapper{
    width: 214px;
    height: 60px;
}
.body .bell-rope-top, .body .bell-rope-bottom, .body .bell-rope-fill{
    width: 420px;
    height: 310px;
    border-radius: 50%;
}
.body .bell-rope-top{
    border: 2px #333 solid;
}
.body .bell-rope-bottom{
    border: 2px #333 solid;
}
.body .bell-rope-fill{
    border: 18px #D80617 solid;
}
.body .bell{
    border: 2px #333 solid;
    width: 60px;
    height: 60px;
    background: #F4D601;
    border-radius: 50%;
}
.body .bell-inside-rope-top, .body .bell-inside-rope-bottom{
    border: 2px #333 solid;
    width: 120px;
    height: 100px;
    border-radius: 50%;
}
.body .bell-inside-circle{
    border: 2px solid #333;
    width: 12px;
    height: 12px;
    background: #fff;
    border-radius: 50%;
}
.body .bell-inside-circle-rope{
    width: 2px;
    height: 20px;
    background: #333;
}

/* 画肚子 */

.body .tripe-wrapper{
    border: 2px #333 solid;
    width: 240px;
    height: 210px;
    background: #029DE2;
    border-top-left-radius: 20% 75%;
    border-top-right-radius: 20% 75%;
    border-bottom-left-radius: 55% 35%;
    border-bottom-right-radius: 55% 35%;
    border-bottom: none;
}
.body .tripe{
    border: 2px #333 solid;
    width: 180px;
    height: 140px;
    background: #fff;
    border-radius: 50%;
}

/* 叮当猫的口袋 */

.body .tripe-pocket{
    border: 2px #333 solid;
    width: 140px;
    height: 60px;
    border-bottom-left-radius: 45% 70%;
    border-bottom-right-radius: 45% 70%;
    border-top: none;
}
.body .tripe-pocket-top-wrapper{
    width: 140px;
    height: 14px;
}
.body .tripe-pocket-top{
    border: 2px #333 solid;
    width: 140px;
    height: 20px;
    border-radius: 50%;
}

/* 下面画上四肢*/

/* 胳膊 */

.body .arm-left, .body .arm-right{
    border: 2px #333 solid;
    width: 100px;
    height: 50px;
    background: #029EE3;
    border-radius: 30%;
}

/* 手 */

.body .hand-left, .body .hand-right{
    border: 2px #333 solid;
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
}

/* 腿 */

.body .leg-left, .body .leg-right{
    border: 2px #333 solid;
    background: #029DE2;
    width: 106px;
    height: 50px;
}
.body .leg-left{
    border-top-left-radius: 15% 60%;
    border-bottom-left-radius: 30% 60%; 
    border-top: none;
    border-right: none;
}
.body .leg-right{
    border-top-right-radius: 15% 60%;
    border-bottom-right-radius: 30% 60%; 
    border-top: none;
    border-left: none;
}
.body .crotch-wrapper{
    width: 38px;
    height: 20px;
}
.body .crotch{
    border: 2px #333 solid;
    width: 40px;
    height: 50px; 
    background: #fff;
    border-top-left-radius: 70% 60%;
    border-top-right-radius: 70% 60%;
}

/* 脚 */

.body .foot-left, .body .foot-right{
    border: 2px #333 solid;
    background: #fff;
    width: 126px;
    height: 50px;
    border-top-left-radius: 60% 60%;
    border-top-right-radius: 50% 80%;
    border-bottom-left-radius: 50% 85%;
    border-bottom-right-radius: 60% 60%;
}

/*
* 身体部分完成了
* 再给眼睛加点动效吧
*/

.head .eyeball-left,.head .eyeball-right{
    animation: move 6s ease infinite;
}

/*
* 好了，一只哆啦A梦就画完了
* 感谢观看！
*/
`