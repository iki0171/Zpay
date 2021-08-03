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