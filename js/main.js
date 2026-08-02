// ============================
// 获取网站部署路径
// ============================

const basePath = "/SerenVeyra2.github.io";

// ============================
// 修正导航路径
// ============================

function fixSiteLinks(){

const links =
document.querySelectorAll(".nav-links a");

links.forEach(link=>{

let href =
link.getAttribute("href");

// 如果已经包含部署路径
// 不再次添加

if(
href.startsWith(basePath)
){
return;
}


// 处理站内链接

if(
href.startsWith("/")
){

link.setAttribute(
"href",
basePath + href
);
}
});

}

// ============================
// 修正图片路径
// ============================
function fixImagePaths(){

const images =
document.querySelectorAll(
".sidebar img"
);

images.forEach(img=>{

let src =
img.getAttribute("src");

if(
src.startsWith("/") &&
!src.includes(basePath)
){

img.setAttribute(
"src",
basePath + src
);
}
});
}


// ============================
// 加载组件
// ============================

function loadComponent(id,file){
const url =
basePath + "/" + file;
console.log(
"加载组件:",
url
);
fetch(url)
.then(response=>{
if(!response.ok){
throw new Error(
"组件不存在:"+url
);
}

return response.text();
})

.then(data=>{
document.getElementById(id).innerHTML=data;
// 如果加载的是header
if(id==="header-placeholder"){
initTheme();
}
fixSiteLinks();
fixImagePaths();
})
  
.catch(error=>{
console.log(
"组件加载失败:",
error
);
});
}
// ============================
// 加载公共组件
// ============================
loadComponent(
"header-placeholder",
"components/header.html"
);

loadComponent(
"sidebar-placeholder",
"components/sidebar.html"
);

// ============================
// Dark Mode
// ============================

function initTheme(){
const themeButton =
document.getElementById(
"theme-toggle"
);

if(!themeButton){
return;
}

themeButton.onclick=function(){
document.body.classList.toggle(
"dark"
);
};
}
