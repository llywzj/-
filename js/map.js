
$(function(){


    initMap();





})
//地图界面高度设置



//加载地图
function initMap(){
// 百度地图API功能
    var map = new BMap.Map("map_div");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(121.6, 31.1), 11);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    var size1 = new BMap.Size(10, 50);
    map.addControl(new BMap.MapTypeControl({
        offset: size1,
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP,

        ]}));
    // 编写自定义函数,创建标注
    function addMarker(point){
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
    }
    // 随机向地图添加25个标注
	/*
    var bounds = map.getBounds();
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    var lngSpan = Math.abs(sw.lng - ne.lng);
    var latSpan = Math.abs(ne.lat - sw.lat);
    for (var i = 0; i < 25; i ++) {
        var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
        addMarker(point);
    };*/
	var point1 = new BMap.Point(121.92992631486327,30.90686682003928);
	addMarker(point1);
	var point2 = new BMap.Point(121.51232441787553,31.143310799728642);
	addMarker(point2);
	var point3 = new BMap.Point(121.57996075651668,31.22076006243433);
	addMarker(point3);
	var point4 = new BMap.Point(121.79922631486327,30.90686682003928);
	addMarker(point4);
	var point5 = new BMap.Point(121.67922631486327,31);
	addMarker(point5);
	var point6 = new BMap.Point(121.56922631486327,31);
	addMarker(point6);
	var point7 = new BMap.Point(121.72922631486327,30.996);
	addMarker(point7);
	var point8 = new BMap.Point(121.92992631486327,30.97);
	addMarker(point8);
	var point9 = new BMap.Point(121.84992631486327,30.98);
	addMarker(point9);
	var point10 = new BMap.Point(121.85992631486327,31.00);
	addMarker(point10);
	var point11 = new BMap.Point(121.5899,31.05);  //
	addMarker(point11);
	var point12 = new BMap.Point(121.5799,31.09);
	addMarker(point12);
	var point13 = new BMap.Point(121.4999,31.09);
	addMarker(point13);
	var point14 = new BMap.Point(121.5,31.12);  //
	addMarker(point14);
	var point15 = new BMap.Point(121.60,31.35);  //
	addMarker(point15);
	var point16 = new BMap.Point(121.65,31.20);   //
	addMarker(point16);
	var point17 = new BMap.Point(121.72,31.07);    //
	addMarker(point17);
	var point18 = new BMap.Point(121.73,31.23);
	addMarker(point18);
	var point19 = new BMap.Point(121.80,31.135);
	addMarker(point19);
	
	var polyline = new BMap.Polyline([point1,point8,point10,point9,point7,point4,point7,point5,point17,point19,point17,point5,point11,point6,point11,point12,point16,point18,point16,point12,point13,point14,point2,point3,point15],{strokeColor:"royalblue",strokeWeight:6,strokeOpacity:0.5});
	map.addOverlay(polyline);
	
	

    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    //设备地图颜色
    var mapStyle={
        style:"midnight"
    };
    map.setMapStyle(mapStyle);





//加载城市控件
    var size = new BMap.Size(10, 50);
    map.addControl(new BMap.CityListControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        offset: size,


    }));
}

