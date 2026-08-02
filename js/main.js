// 自动获取网站根目录，获取仓库名称
const siteRoot = window.location.pathname.split('/')[1];

// 自动修正网站子目录路径
function fixSiteLinks(){
const links = document.querySelectorAll(
".nav-links a"
);
links.forEach(link => {
const href = link.getAttribute("href");
if(href.startsWith("/")){
link.href = `/${siteRoot}${href}`;
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
if(src.startsWith("/")){
img.src = `/${siteRoot}${src}`;
}
});
}

// 加载公共组件
function loadComponent(id, file){
fetch(`/${siteRoot}/${file}`)
.then(response => response.text())
.then(data => {
document.getElementById(id).innerHTML = data;

// 组件加载完成后执行路径修正
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
