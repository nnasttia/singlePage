$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['home', 'about', 'services', 'resume', 'contact'],
        sectionsColor: ['#2b3d4f', '#2b3d4f', 'rgb(38, 52, 70)', 'rgb(43, 61, 79)', '#263446'],
        navigation: {
            'position': 'right',
            'tooltips': ['Home', 'About Me', 'Services', 'Resume', 'Contact Me']
        },

        afterRender: function(){
            $('#pp-nav').addClass('main-menu');
        },

        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('');
            }else{
                $('#pp-nav').addClass('main-menu');
            }
        }
    });
});
