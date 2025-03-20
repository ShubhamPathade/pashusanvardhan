

const switchLanguage = (lang) => {

    if (lang == 1) {
        mr();
    } else if (lang == 2) {
        en();
    } else {
        mr();
    }

}

const mr = () => {

    $('.txt_link_home').html('होम');

}

const en = () => {
    $('.txt_link_home').html('Home');

}