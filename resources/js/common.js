$(window).ready(function(){
    ui.localSelect();
});

const ui = {};

ui.zIndex = 2000;
ui.popupOn = p => { 
    const t = p ? p : '.pop_wrap';
    $(t).addClass('on').css({zIndex:ui.zIndex++});
    ui.bodyScroll('on','layerpop');
}

ui.popupOff = p => { 
    const t = p ? p : '.pop_wrap';
    $(t).removeClass('on');
    ui.bodyScroll('off','layerpop');
}

ui.bodyScroll = (state,datasetName) => {
    switch (state) {
        case 'on': return $('body').attr(`data-${datasetName}`,true);
        case 'off': return $('body').attr(`data-${datasetName}`,false);
    }
}

ui.localSelect = () => {

    $('.step .select,.step .txt_inp').on('click', e=>{
        e.preventDefault();
        $('.step > li').removeClass('on');

        if ( e.currentTarget.className != 'select' ) return;

        $(e.currentTarget).parents('li').addClass('on');
        $('.area_close').addClass('on');

       

        // $('.sch_box').append('<div class="area_close" style="position:fixed; left:0; right:0; top:70px; bottom:0; z-index:9;"></div>')
    });

    $(document).on('click', '.area_close', e=>{
        e.preventDefault();

        $('.step > li').removeClass('on');
        
        $('.area_close').removeClass('on');
    });
}
