
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
}, 20)

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
.doraemen-wrapper{
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

/*
* 请看右边，现在可以画图了
* 先从头部画起
*/

.doraemen-head{
    border: 2px #333 solid;
    width: 310px;
    height: 310px;
    border-radius: 50%;
    background: #029EE3;
}

/* 画眼睛 */

.doraemen-head__eye--l,.doraemen-head__eye--r{
    border: 2px #333 solid;
    width: 60px;
    height: 80px;
    background: #fff;
    border-radius: 50%;
}
.doraemen-head__eye--l__eyeball,.doraemen-head__eye--r__eyeball{
    width: 17px;
    height: 17px;
    background: #000;
    border-radius: 50%;
}

/* 画脸部 */

.doraemen-head__face{
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

.doraemen-head__face__nose{
    border: 2px #333 solid;
    width: 44px;
    height: 44px;
    background: #D80617;
    border-radius: 50%;
}
.doraemen-head__face__nose-light{
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
}

/* 胡须 */

.doraemen-head__face__mustache--l1, .doraemen-head__face__mustache--l2, .doraemen-head__face__mustache--l3,
.doraemen-head__face__mustache--r1, .doraemen-head__face__mustache--r2, .doraemen-head__face__mustache--r3{
    width: 80px;
    border: 1px #333 solid;
}
.doraemen-head__face__mustache--c{
    height: 58px;
    width: 2px;
    background: #333;
}

/* 嘴巴部分 */

.doraemen-head__face__lips--l,.doraemen-head__face__lips--r{
    border: 2px #333 solid;
    width: 44px;
    height: 64px;
    background: #fff;
}
.doraemen-head__face__lips--l{
    border-top-left-radius: 75% 50%;
    border-bottom-left-radius: 75% 50%;
    border-right: none;
}
.doraemen-head__face__lips--r{
    border-top-right-radius: 75% 50%;
    border-bottom-right-radius: 75% 50%;
    border-left: none;
}
.doraemen-head__face__lips--c{
    width: 156px;
    height: 20px;
}
.doraemen-head__face__lips--c-inner{
    border: 2px #333 solid;
    height: 75px;
    width: 250px;
    border-top-left-radius: 65%;
    border-top-right-radius: 65%;
}
.doraemen-head__face__lips--c--l,.doraemen-head__face__lips--c--r{
    width: 36px;
    height: 20px;
}
.doraemen-head__face__lips--c--l-inner,.doraemen-head__face__lips--c--r-inner{
    border: 2px #333 solid;
    height: 20px;
    width: 65px;
    background: #fff;
}
.doraemen-head__face__lips--c--l-inner{
    border-bottom-left-radius: 45%;
    border-bottom-right-radius: 60%;
}
.doraemen-head__face__lips--c--r-inner{
    border-bottom-left-radius: 60%;
    border-bottom-right-radius: 45%;
}
.doraemen-head__face__mouse{
    width: 240px;
    height: 102px;
}
.doraemen-head__face__mouse-inner{
    border: 2px #333 solid;
    height: 150px;
    width: 240px;
    background: #E80016;
    border-bottom-left-radius: 50% 100%;
    border-bottom-right-radius: 50% 100%;
}
.doraemen-head__face__lips--c-inner{
    background: #E80016;
}
.doraemen-head__face__mouse-shade{
    height: 14px;
    width: 156px;
    background: #fff; 
}

/* 加上舌头 */

.doraemen-head__face__mouse-inner__tongue{
    height: 150px;
    width: 240px;
    background: #E80016;
    border-bottom-left-radius: 50% 100%;
    border-bottom-right-radius: 50% 100%;
}
.doraemen-head__face__mouse-inner__tongue--l,.doraemen-head__face__mouse-inner__tongue--r{
    border: 2px solid #333;
    width: 80px;
    height: 60px;
    background: #EF6B1C;
}
.doraemen-head__face__mouse-inner__tongue--l{
    border-top-left-radius: 50% 80%;
    border-top-right-radius: 50% 80%;
}
.doraemen-head__face__mouse-inner__tongue--r{
    border-top-left-radius: 50% 80%;
    border-top-right-radius: 50% 80%;
}
.doraemen-head__face__mouse-inner__tongue-shade{
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

.doraemen-body{
    width: 310px;
    height: 310px;
}

/* 先画个铃铛 */

.doraemen-body__bell-rope{
    width: 214px;
    height: 60px;
}
.doraemen-body__bell-rope--t, .doraemen-body__bell-rope--b, .doraemen-body__bell-rope--fill{
    width: 420px;
    height: 310px;
    border-radius: 50%;
}
.doraemen-body__bell-rope--t{
    border: 2px #333 solid;
}
.doraemen-body__bell-rope--b{
    border: 2px #333 solid;
}
.doraemen-body__bell-rope--fill{
    border: 18px #D80617 solid;
}
.doraemen-body__bell{
    border: 2px #333 solid;
    width: 60px;
    height: 60px;
    background: #F4D601;
    border-radius: 50%;
}
.doraemen-body__bell-inner1, .doraemen-body__bell-inner2{
    border: 2px #333 solid;
    width: 120px;
    height: 100px;
    border-radius: 50%;
}
.doraemen-body__bell__circle{
    border: 2px solid #333;
    width: 12px;
    height: 12px;
    background: #fff;
    border-radius: 50%;
}
.doraemen-body__bell__circle-rope{
    width: 2px;
    height: 20px;
    background: #333;
}

/* 画肚子 */

.doraemen-body__tripe{
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
.doraemen-body__tripe--fill{
    border: 2px #333 solid;
    width: 180px;
    height: 140px;
    background: #fff;
    border-radius: 50%;
}

/* 叮当猫的口袋 */

.doraemen-body__tripe-pocket{
    border: 2px #333 solid;
    width: 140px;
    height: 60px;
    border-bottom-left-radius: 45% 70%;
    border-bottom-right-radius: 45% 70%;
    border-top: none;
}
.doraemen-body__tripe-pocket--t{
    width: 140px;
    height: 14px;
}
.doraemen-body__tripe-pocket--t-open{
    border: 2px #333 solid;
    width: 140px;
    height: 20px;
    border-radius: 50%;
}

/* 下面画上四肢*/

/* 胳膊 */

.doraemen-body__arm--l, .doraemen-body__arm--r{
    border: 2px #333 solid;
    width: 100px;
    height: 50px;
    background: #029EE3;
    border-radius: 30%;
}

/* 手 */

.doraemen-body__hand--l, .doraemen-body__hand--r{
    border: 2px #333 solid;
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
}

/* 腿 */

.doraemen-body__leg--l, .doraemen-body__leg--r{
    border: 2px #333 solid;
    background: #029DE2;
    width: 106px;
    height: 50px;
}
.doraemen-body__leg--l{
    border-top-left-radius: 15% 60%;
    border-bottom-left-radius: 30% 60%; 
    border-top: none;
    border-right: none;
}
.doraemen-body__leg--r{
    border-top-right-radius: 15% 60%;
    border-bottom-right-radius: 30% 60%; 
    border-top: none;
    border-left: none;
}
.doraemen-body__crotch{
    width: 38px;
    height: 20px;
}
.doraemen-body__crotch-inner{
    border: 2px #333 solid;
    width: 40px;
    height: 50px; 
    background: #fff;
    border-top-left-radius: 70% 60%;
    border-top-right-radius: 70% 60%;
}

/* 脚 */

.doraemen-body__foot--l, .doraemen-body__foot--r{
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

.doraemen-head__eye--l__eyeball, .doraemen-head__eye--r__eyeball{
    animation: move 6s ease infinite;
}

/*
* 好了，一只哆啦A梦就画完了
* 感谢观看！
*/
`