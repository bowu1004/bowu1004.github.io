/*
ap1.on('play', function () {
    console.log('play');
});
ap1.on('play', function () {
    console.log('play play');
});
ap1.on('pause', function () {
    console.log('pause');
});
ap1.on('canplay', function () {
    console.log('canplay');
});
ap1.on('playing', function () {
    console.log('playing');
});
ap1.on('ended', function () {
    console.log('ended');
});
ap1.on('error', function () {
    console.log('error');
});
*/
var ap3 = new APlayer({
    element: document.getElementById('player3'),
    narrow: false,
    autoplay: true,
    showlrc: 1,
    mutex: true,
    theme: '#615754',
    music: {
        title: '你一个人在北京',
        author: '王雨箬',
        url: './music/你一个人在北京.mp3',
        pic: './music/一个人在北京.png',
        lrc: "[by:Jeremy-王雨箬]\n[ti:你一个人在北京ver.]\n[ar:Jeremy-王雨箬]\n[lr:Jeremy-王雨箬]\n[co:Jeremy-王雨箬]\n[ag:Jeremy-王雨箬]\n [00:00.00]  \n [00:14.60]作词：王雨箬\n [00:20.98]作曲：王雨箬\n [00:33.88]编曲：王雨箬 \n [00:40.01]今年冬天北京下起了雪\n[00:46.50]这是我们分离后的又一年\n[00:52.42]那年的冬天\n[00:55.38]我们许下诺言\n[00:58.35]要一直一直一直走到永远\n[01:05.97]后来我在地球的另一边\n[01:11.93]和你隔了十三小时的时间\n[01:17.98]没有我的世界 你是否也会怀念\n[01:24.31]你会孤独 怕你会哭\n[01:30.41]你一个人在北京\n[01:33.49]这不是我做的决定\n[01:36.33]不能为你 天冷再加一件毛衣\n[01:43.24]不能握紧你的手心 我好想你\n[01:49.46]太多我们爱过的证据\n[01:55.53]你一个人在北京\n[01:58.78]我离不开你的呼吸\n[02:02.14]想起你一个人要受多少委屈伤心\n[02:08.94]带上你送我的围巾\n[02:12.20]我好想你\n[02:15.86]我好想好想回到你身旁\n[02:21.72]我好想好想回到你身旁\n[02:27.98]我好想好想回到你的身旁\n [02:36.40]  \n [02:36.45](钢琴)\n [03:01.79]你一个在北京\n[03:04.54]这不是我做的决定\n[03:08.15]不能为你 天冷再加一件毛衣\n[03:15.08]不能握紧你的手心\n[03:17.85]我好想你\n[03:21.03]太多我们爱过的证据\n[03:27.35]你一个人在北京\n[03:30.16]我离不开你的呼吸\n[03:33.72]想起你一个人要受多少委屈伤心\n[03:40.63]带上你送我的围巾\n[03:43.82]我好想你\n[03:47.06]我好想好想回到你身旁\n [03:53.81]我好想好想回到你身旁\n [03:59.99]我好想好想回到你身旁\n[04:07.35]  \n [04:07.57](钢琴)\n [04:25.10]  \n [04:25.43]你一个人在北京\n [04:27.45]这不是我做的决定\n [04:31.43]不能为你 天冷再加一件毛衣\n[04:38.14]不能握紧你的手心 我好想你\n[04:44.46]太多我们爱过的证据\n[04:50.33]你一个人在北京\n[04:53.18]我离不开你的呼吸\n[04:56.94]想起你一个人要受多少委屈伤心\n[05:04.04]带上你送我的围巾\n[05:06.70]我好想你\n[05:10.26]我好想好想回到你身旁\n [05:16.56]我好想好想回到你身旁\n [05:23.16]我好想好想回到你身旁\n [05:30.35]  \n [05:30.45](钢琴)\n [05:43.10]  \n [05:43.89]（-End-）"
    }
});
ap3.init();


var ap4 = new APlayer({
    element: document.getElementById('player4'),
    narrow: false,
    autoplay: false,
    showlrc: false,
    mutex: true,
    theme: '#ad7a86',
    music: [
        {
            title: '流星',
            author: '王菲',
            url: './music/王菲－流星.mp3',  
            pic: 'http://img.hc360.com/home-a/info/images/200905/200905111111282593.jpg'
        },
        {
            title: 'Stop Standing There',
            author: '艾薇儿',
            url: './music/Stop Standing There 艾薇儿.mp3',
            pic: 'http://www.mm52.com/star/images/a/avril_lavigne/avril_lavigne_0008_128px.jpg'
        },
        {
            title: '漂洋过海来看你(LIVE)',
            author: '李宗盛',
            url: './music/漂洋过海来看你 (Live).mp3',
            pic: 'http://www.qh.xinhuanet.com/1113811021_14198213981571n.jpg'
        },
        {
            title: '泡沫',
            author: '邓紫棋',
            url: './music/邓紫棋-泡沫.mp3',
            pic: 'http://img.mingxing.com/upload/thumb/2015/01-04/0-zQKZu1.jpg'
        },
        {
            title: '因为爱情',
            author: '陈奕迅－王菲',
            url: './music/因为爱情.mp3',  
            pic: 'https://i1.sndcdn.com/artworks-000004235117-03wrga-small.jpg'
        },
    ]
});
ap4.init();