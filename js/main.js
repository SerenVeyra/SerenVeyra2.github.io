// 获取网站部署路径
const basePath = window.location.pathname.split('/')[1] 
    ? "/" + window.location.pathname.split('/')[1]
    : "";


// 自动修正网站子目录路径，修正导航
function fixSiteLinks(){


const links =
document.querySelectorAll(".nav-links a");


links.forEach(link => {


const href = link.getAttribute("href");


if(href.startsWith("/") && basePath){


link.href =
`${basePath}${href}`;


}


});


}



// 修正图片路径

function fixImagePaths(){


const images = document.querySelectorAll(
".sidebar img"
);



images.forEach(img=>{


const src = img.getAttribute("src");


if(src.startsWith("/") && basePath){


img.src = `${basePath}${src}`;


}


});


}



// 加载公共组件

function loadComponent(id, file){


fetch(`${basePath}/${file}`)


.then(response => response.text())


.then(data => {


document.getElementById(id).innerHTML = data;


// 组件加载完成后修正路径

fixSiteLinks();

fixImagePaths();


})


.catch(error => {


console.log("组件加载失败:", error);


});


}



// 加载 Header

loadComponent(
"header-placeholder",
"components/header.html"
);


// 加载 Sidebar

loadComponent(
"sidebar-placeholder",
"components/sidebar.html"
);
