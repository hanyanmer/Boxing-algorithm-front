import { history } from "@umijs/max";
import { Button } from "antd";
import React, { useEffect } from "react";
import * as  THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import AvatarImg from '@/assets/avatar.png'
// import  OrbitControls from 'three-orbitcontrols'

export default function Model() {
  useEffect(()=>{
    /**
     * 创建场景对象Scene
     */
  var scene = new THREE.Scene();
  /**
   * 创建网格模型
   */
  // 长 宽高 
  var geometry = new THREE.BoxGeometry(100, 20, 70); //创建一个立方体几何对象Geometry

  console.log(geometry);
console.log('几何体顶点位置数据',geometry?.vertices);
console.log('三角行面数据',geometry?.faces);
  var material = new THREE.MeshLambertMaterial({
    color: 0x0000ff
  }); //材质对象Material
  var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  scene.add(mesh); //网格模型添加到场景中
  var geometry1 = new THREE.BoxGeometry(100, 70, 70); //创建一个立方体几何对象Geometry
  var material1 = new THREE.MeshLambertMaterial({
    color: 0xffff00
  }); //材质对象Material
  var mesh1 = new THREE.Mesh(geometry1, material1); //网格模型对象Mesh
  mesh1.position.set(100, 20, 70)
  scene.add(mesh1); //网格模型添加到场景中

var mesh3 = mesh1.clone();//克隆网格模型
mesh3.translateX(90);//网格模型mesh平移
scene.add(mesh3)

// group
// var geometry = new THREE.BoxGeometry(20, 20, 20);
// var material = new THREE.MeshLambertMaterial({color: 0x0000ff});
// var group = new THREE.Group();
// var mesh1 = new THREE.Mesh(geometry, material);
// var mesh2 = new THREE.Mesh(geometry, material);
// mesh2.name="name2"
// mesh2.translateX(25);
// //把mesh1型插入到组group中，mesh1作为group的子对象
// group.add(mesh1);
// //把mesh2型插入到组group中，mesh2作为group的子对象
// group.add(mesh2);
// //把group插入到场景中作为场景子对象
// scene.add(group);

// var mesh = new THREE.Mesh(geometry, material);
// // mesh的本地坐标设置为(50, 0, 0)
// mesh.position.set(50, 0, 0);
// var group = new THREE.Group();
// group本地坐标设置和mesh一样设置为(50, 0, 0)
// mesh父对象设置position会影响得到mesh的世界坐标
// group.position.set(50, 0, 0);
// group.add(mesh);
// scene.add(group);

// // .position属性获得本地坐标
// console.log('本地坐标',mesh.position);

// getWorldPosition()方法获得世界坐标
//该语句默认在threejs渲染的过程中执行,如果渲染之前想获得世界矩阵属性、世界位置属性等属性，需要通过代码更新
// scene.updateMatrixWorld(true);
// var worldPosition = new THREE.Vector3();
// mesh.getWorldPosition(worldPosition);
// console.log('世界坐标',worldPosition);

var geometry = new THREE.BoxGeometry(100, 100, 100);
// 控制台查看立方体数据
console.log(geometry);
// 控制台查看geometry.toJSON()结果
console.log(geometry.toJSON());
// JSON对象转化为字符串
console.log(JSON.stringify(geometry.toJSON()));
// JSON.stringify()方法内部会自动调用参数的toJSON()方法
console.log(JSON.stringify(geometry));

// var geometry = new THREE.PlaneGeometry(204, 102); //矩形平面
// // TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
// var textureLoader = new THREE.TextureLoader();
// // 执行load方法，加载纹理贴图成功后，返回一个纹理对象Texture
// textureLoader.load(AvatarImg, function(texture) {
//   var material = new THREE.MeshLambertMaterial({
//     // color: 0x0000ff,
//     // 设置颜色纹理贴图：Texture对象作为材质map属性的属性值
//     map: texture,//设置颜色贴图属性值
//   }); //材质对象Material
//   var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
//   scene.add(mesh); //网格模型添加到场景中

//   //纹理贴图加载成功后，调用渲染函数执行渲染操作
//   // render();
// })
  /**
   * 光源设置
   */
  //点光源
  var point = new THREE.PointLight(0xffffff);
  point.position.set(400, 200, 300); //点光源位置
  scene.add(point); //点光源添加到场景中
  //环境光
  var ambient = new THREE.AmbientLight(0x444444);
  scene.add(ambient);
  // console.log(scene)
  // console.log(scene.children)
  /**
   * 相机设置
   */
  var width = window.innerWidth; //窗口宽度
  var height = window.innerHeight; //窗口高度
  var k = width / height; //窗口宽高比
  var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
  //创建相机对象
  var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
  camera.position.set(200, 300, 200); //设置相机位置
  camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
  /**
   * 创建渲染器对象
   */
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);//设置渲染区域尺寸
  renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
  var canva:HTMLElement|null = document.getElementById('canvas')
  if(canva){
    canva.appendChild(renderer.domElement); //body元素中插入canvas对象
  }
  

  function render() {
    renderer.render(scene,camera);//执行渲染操作
    // requestAnimationFrame(render);//请求再次执行渲染函数render
  }
  render();
  var controls = new OrbitControls(camera,renderer.domElement);//创建控件对象
  controls.addEventListener('change', render);//监听鼠标、键盘事件

  var axisHelper = new THREE.AxesHelper(250);
scene.add(axisHelper);

  },[])
  
  return <div>
    <Button onClick={()=>history.push('/home/config')}>创建</Button>
    <div id="canvas">canvas</div>
    </div>;
}
