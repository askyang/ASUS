console.log("加载完成");
//配置当前整个项目所有模块的路径
require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        parabola:"parabola",
        "register":"register",
        "ajax":"ajax",
        //页面跳转
        "openNewHtml":"openNewHtml",
        
    },
    shim:{
        "jquery-cookie":['jquery'],
        "parabola":{
            exports:"_"
        }
    }
})
require(["register","ajax","openNewHtml"],function(register,ajax,openNewHtml){
    register.register();
    ajax.ajax();
    openNewHtml.openNewHtml();
})