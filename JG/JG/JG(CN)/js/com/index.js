$(function () {
    $(".returnClick").click(function () {
        console.log(1);
        if ($(this).attr("index") == 0) {
            window.location.href = '../index/index.html'
        } else if ($(this).attr("index")) {
            if ($(this).attr("indexs")) {
                window.location.href = '../index' + $(this).attr("index") + '/index.html?type=' + $(this).attr("indexs")
            } else {
                window.location.href = '../index' + $(this).attr("index") + '/index.html'
            }
        }
        if ($(this).html() == '个人信息管理') {
            window.location.href = '../index3/personal_info.html'
        }
    })

    //当前url中如果带有indexs值则进行提取（通过判断url是否含有问号进行）
    var ur = location.href;
    if(ur.indexOf('?') !== -1){
        var type = ur.split('?')[1].split("=")[1];
        $('.nav_left>li:not(.last)').attr('class', '');
        $('.content_main_list').find('.content_main_item').addClass('hide')
        $('.nav_left>li').eq(type - 1).attr('class', 'nav_purple')
        $('.content_main_list').find('.content_main_item').eq(type - 1).removeClass('hide');
        $('.now_position').html($('.nav_left>li').eq(type - 1).html())
    }

    //活动回顾页
    $('.rewatch').click(function () {
        console.log(123)
        window.location.href = 'index2_detail2.html';
    })
    //进入成立校友会程序详情页
    $('.establish_title').click(function () {
        window.location.href = 'establish_detail.html'
    })
    //进入登录页
    $('.login_btn').click(function () {
        window.location.href = '../index8/index.html'
    })
    //返回主站
    $('.iconBox_right>span:nth-of-type(3)').click(function () {
        window.location.href = 'http://www.cuhk.edu.cn/'
    })
    //校友专享
    $('.XYZX_btn').click(function () {
        window.location.href = '../index4/index.html?type=1'
    })
    //首页活动信息按钮
    $('.activity_btn>span,.activity_btn>img').click(function () {
        window.location.href = '../index2/index.html?type=1'
    })
    //首页查看活动详情按钮
    $('.activity_detail').click(function () {
        window.location.href = '../index2/index2_detail1.html'
    })
    //首页支持我们按钮
    $('.support_us>span,.support_us>img').click(function () {
        window.location.href = '../index5/index.html'
    })
    $('.finance_special>div:nth-of-type(1)').click(function () {
        window.location.href = '../index3/personal_info.html'
    })
    //当前位置按钮点击返回
    $('.finance_navtext>span:nth-of-type(3)').click(function () {
        var ur = location.href;
        var type = ur.lastIndexOf('/');
        ur=ur.substring(0,type+1);
        window.location.href=ur+'index.html';
    })
    $('.finance_navtext>span:nth-of-type(1),.nav_title_box>img:nth-of-type(1)').click(function () {
        window.location.href='../index/index.html';
    })
    $('.iconBox_right_1 img').click(function () {
        window.location.href='../index9/have.html';
    })
    $('.navigation_search img').click(function () {
        window.location.href='../index9/have.html';
    })


    //-------mobile
    //首页
    $(".nav_title img").eq(0).click(function () {
        window.location.href = "../index/index.html"
    })
    //打开弹出层菜单
    $(".menu_mobile").click(function () {
        $(".navigation").css("display", "block")
    })
    //关闭弹出层菜单
    $(".nav_title img").eq(1).click(function () {
        $(".navigation").css("display", "none")
    })
    //
    $('.return').click(function () {
        window.location.href='http://www.cuhk.edu.cn/'
    })
    $('.links').click(function () {
        var links=$(this).html()
        window.location.href=links;
    })
    //打开二级菜单动画
    $(".navigation_lisfun").click(function () {
        if ($(this).find("div img").hasClass("addimgclass")) {
            $(this).find("div img").removeClass("addimgclass")
            $(this).next().hide(0)
        } else {
            $(this).find("div img").addClass("addimgclass")
            $(this).next().show(0)
        }
    })
    $('.iconBox_right>img:nth-of-type(1)').on('click',function () {
        $('.finance_nav').animate({
            "top": 0, "left": 0
        },300);
    })
    $('.close_pad').on('click',function () {
        $('.finance_nav').animate({
            "top": 0, "left": "100%"
        },300)
    })
    $('.nav_div').on('click',function () {
        if ($(this).find("img").hasClass("addimgclass")) {
            $(this).find("img").removeClass("addimgclass")
            $(this).children('div').hide(0)
        } else {
            $(this).find("img").addClass("addimgclass")
            $(this).children('div').show(0)
        }
    })

    //中英文切换
    $('.en_btn').click(function () {
        window.location.href=window.location.href.replace('/JG(CN)/','/JG(EN)/');
    })
    $('.iconBox_right>span:nth-of-type(2)').click(function () {
        window.location.href=window.location.href.replace('/JG(CN)/','/JG(EN)/');
    })
})
