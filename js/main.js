// 自动获取网站根目录
const siteRoot = window.location.pathname.split('/')[1];

// 加载公共组件
function loadComponent(id, file){

fetch(`/${siteRoot}/${file}`)

.then(response => response.text())

.then(data => {

document.getElementById(id).innerHTML = data;

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
