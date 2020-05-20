var selectedMainImgId = 0;  

//Registries JavaScript Arrary
var clinicals = [
{
    id: 0, // id
    logo: 'MY CLINICALS', // logo
    logoImg: 'assets/img/logo.png',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat arcu ut orci porta, eget porttitor felis suscipit. Sed a nisl ullamcorper, tempus augue at, rutrum lacus.', // title
    lists: [
        {
            listIcon: 'icon-list-icon fa fa-hand-o-up bounceIn',
            listTitle: 'CLICK THROUGH',
            listContent: 'Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros. Duis ex metus, facilisis nec porta non, accumsan vel turpis.',
        },
        {
            listIcon: 'icon-list-icon fa fa-heart-o bounceIn',
            listTitle: 'LEAD GENERATION',
            listContent: 'Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros. Duis ex metus, facilisis nec porta non, accumsan vel turpis.',
        },
        {
            listIcon: 'icon-list-icon fa fa-lightbulb-o bounceIn',
            listTitle: 'OTHER PURPOSES',
            listContent: 'Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros. Duis ex metus, facilisis nec porta non, accumsan vel turpis.',
        },
    ],
    mainImg: ['assets/img/antoine-barres.jpg', 'assets/img/daniel-olahh.jpg', 'assets/img/login.jpg', 'assets/img/login-image.jpg'],
    
},
{
    id: 1, // id
    logo: 'MEDICIO', // logo
    logoImg: 'assets/img/logo1.png',
    title: 'Sed feugiat arcu ut orci porta, eget porttitor felis suscipit. Sed a nisl ullamcorper, tempus augue at, rutrum lacus.', // title
    lists: [
        {
            listIcon: 'icon-list-icon fa fa-heart-o bounceIn',
            listTitle: 'LEAD GENERATION',
            listContent: 'Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros. Duis ex metus, facilisis nec porta non, accumsan vel turpis.',
        },
        {
            listIcon: 'icon-list-icon fa fa-lightbulb-o bounceIn',
            listTitle: 'OTHER PURPOSES',
            listContent: 'Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros. Duis ex metus, facilisis nec porta non, accumsan vel turpis.',
        },
        {
            listIcon: 'icon-list-icon fa fa-hand-o-up bounceIn',
            listTitle: 'CLICK THROUGH',
            listContent: 'Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros. Duis ex metus, facilisis nec porta non, accumsan vel turpis.',
        },
    ],
    mainImg: ['assets/img/antoine-barres.jpg', 'assets/img/daniel-olahh.jpg', 'assets/img/login.jpg', 'assets/img/login-image.jpg'],
},
];

// Change Selected Registry Conent ( id is application registry id )
function applicationTemplate(id) {
    // LOGO
    var logo = document.getElementById("logo");
    logo.innerHTML = clinicals[id].logo;

    //TITLE
    var title = document.getElementById("title");
    title.innerHTML = clinicals[id].title;

    // LEFT SIDE LIST
    var temp ='';
    for ( var i = 0 ; i < clinicals[id].lists.length; i ++) {
        temp += `<li><span class="` + clinicals[id].lists[i].listIcon + `""></span><h4 class="icon-list-title">`+ clinicals[id].lists[i].listTitle +`</h4><p class="icon-list-content">` + clinicals[id].lists[i].listContent + `</p> </li>`
    }
    var iconList = document.getElementById("icon-list");
    iconList.innerHTML = temp;

    //LOGON FORM LOGO
    var web_portal_log = document.getElementById('web_portal_log');
    web_portal_log.innerHTML = clinicals[id].logo;

    //LOGON FORM SUBMIT BUTTON
    var portal_logon = document.getElementById('portal_logon');
    portal_logon.innerHTML = clinicals[id].logo + " LOGON";

    // setting box images
    var backgroundImg = '';
    for ( var i = 0; i < clinicals[id].mainImg.length; i++ ) {
        backgroundImg += `<li><a class="img-holder switch-trigger background" href="javascript:void(0)"><img src=` + clinicals[id].mainImg[i] + ` alt=""></a></li>`
    }
    // setting box logos
    var logos = '';
    for ( var i = 0 ; i < clinicals.length ; i++ ) {
        logos += `<li><a class="img-holder"  onclick="applicationTemplate(` + i + `)"><img src=` + clinicals[i].logoImg + ` alt="" style="width: 100%; height: 40px"></a></li>`
    }
    // settingBox template
    var settingBox = document.getElementById("settingBox");
    settingBox.innerHTML = `
        <div class="dropdown show-dropdown">
        <a href="#" data-toggle="dropdown">
            <i class="fa fa-cog fa-2x"> </i>
        </a>
        <ul class="dropdown-menu">
            <li class="header-title"> COLORS </li>
            <li class="adjustments-line">
                <a href="javascript:void(0)" class="switch-trigger active-color">
                    <div class="badge-colors ml-auto mr-auto">
                        <span class="badge filter badge-purple " data-color="purple"  onclick="changeColor(1)"></span>
                        <span class="badge filter badge-azure" data-color="azure" onclick="changeColor(2)"></span>
                        <span class="badge filter badge-green" data-color="green" onclick="changeColor(3)"></span>
                        <span class="badge filter badge-warning" data-color="orange" onclick="changeColor(4)"></span>
                        <span class="badge filter badge-danger active" data-color="danger" onclick="changeColor(5)"></span>
                    </div>
                    <div class="clearfix"></div>
                </a>
            </li>
            <li class="header-title"> CLINICALS </li>` + logos + `</li><br/>
            <li class="header-title" style="margin-top: 10px; border-top: 1px solid #ddd;">BACKGROUND IMAGES</li> ` + backgroundImg + `
            </ul></div>`;
    callSettingBox();
}
// End Content

function changeColor(id) {
    if (id == 1) {
      $(".icon-list-icon").css("background-color", '#9368E9');
      $(".myBtn").css("background-color", '#9368E9');
    } else if (id == 2) {
      $(".icon-list-icon").css("background-color", '#2CA8FF');
      $(".myBtn").css("background-color", '#2CA8FF');
    } else if (id == 3) {
      $(".icon-list-icon").css("background-color", 'rgb(23, 153, 65)');
      $(".myBtn").css("background-color", 'rgb(23, 153, 65)');
    } else if (id == 4) {
      $(".icon-list-icon").css("background-color", '#fbc658');
      $(".myBtn").css("background-color", '#fbc658');
    } else if (id == 5) {
      $(".icon-list-icon").css("background-color", '#f5593d');
      $(".myBtn").css("background-color", '#f5593d');
    }
}
// settingBox events
function callSettingBox() {
    window_width = $(window).width();

    $('.fixed-plugin a').click(function(event) {
    // if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
    if ($(this).hasClass('switch-trigger')) {
        if (event.stopPropagation) {
        event.stopPropagation();
        } else if (window.event) {
        window.event.cancelBubble = true;
        }
    }
    });

    $('.fixed-plugin .active-color span').click(function() {
        $full_page_background = $('.full-page-background');

        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });


    $('.fixed-plugin .background').click(function() {
        $(this).parent('li').siblings().removeClass('active');
        $(this).parent('li').addClass('active');
        var new_image = $(this).find("img").attr('src');
        $("#page-header").css("background-image", "url(" + new_image + ")");

    });
}

$(document).ready(function() {
    $().ready(function() {
        callSettingBox();
    });
    // first application call at the first time
    applicationTemplate(1);
});
