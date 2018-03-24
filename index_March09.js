var OneLinks = new Array(3);//图片数组
OneLinks[0] = "./img/main_page/bee_character.png";//给图片数组赋值，即变换时的图像值
OneLinks[1] = "./img/main_page/AU_eagle_1.jpg";
OneLinks[2] = "./img/main_page/AU_eagle_2.jpg";
OneLinks[3] = "./img/main_page/vis_au.png";

var id = function(el) {           
    return document.getElementById(el);};
    c = id('photo-list');//由id得到photo-list元素   
    ul = id('scroll');//由id得到scroll元素
    var i=0;
    if(c)
    {  
        marquee = function() 
        {   
            var j=i%4;//以三个图片为例，循环 
            //onclick=window.alert("Picture XXX")
           // <img id=i onclick=window.alert("Picture XXX")>
            ul.getElementsByTagName('img')[0].src = OneLinks[j];//将每次即将变换的图像值赋值给图片元素的src 
            i++;
            if (i>4) //avoid to large
                {i=1;}
        }; 
        speed = 2000;//变换的时间差，越大变换速度越慢
        var timer = setInterval(marquee, speed);
    }