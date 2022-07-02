/**
 * Created by 30947 on 2018/7/18.
 */
$(function(){

    char1();
    char2();
    char3();
    char4();

})

//统计分析图
function char1() {

    var myChart = echarts.init($("#char1")[0]);

    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            textStyle : {
                color : '#ffffff',

            },
            data:['厨余垃圾','可回收垃圾','有害垃圾','其他']
        },

        calculable : false,
        series : [
            {
                name:'车类型',
                type:'pie',
                radius : ['40%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    },
                    emphasis : {
                        label : {
                            show : true,
                            position : 'center',
                            textStyle : {
                                fontSize : '20',
                                fontWeight : 'bold'
                            }
                        }
                    }
                },
                data:[
                    {value:42, name:'厨余垃圾'},
                    {value:31, name:'可回收垃圾'},
                    {value:16, name:'有害垃圾'},
                    {value:9, name:'其他'}

                ]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char2() {

    var myChart = echarts.init($("#char2")[0]);

    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {show:'true',borderWidth:'0'},
        legend: {
            data:['厨余垃圾', '可回收','有害垃圾','其他'],
            textStyle : {
                color : '#ffffff',

            }
        },

        calculable :false,
        xAxis : [
            {
                type : 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:['#f2f2f2'],
                        width:0,
                        type:'solid'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'category',
                data : ['黄浦区','徐汇区','长宁区','静安区'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],
        series : [
            {
                name:'厨余垃圾',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[42, 40, 43, 41]
            },
            {
                name:'可回收',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[30, 34, 26, 33]
            },
            {
                name:'有害垃圾',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[17, 17, 19, 16]
            },
            {
                name:'其他',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[11, 9, 12, 10]
            }

        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char3() {

    var myChart = echarts.init($("#char3")[0]);

    option = {
        legend: {
            data:['一周中垃圾量'],
            textStyle : {
                color : '#ffffff',

            }
        },
        grid: {show:'true',borderWidth:'0'},

        calculable : false,
        tooltip : {
            trigger: 'axis',
            formatter: "Temperature : <br/>{b}km : {c}°C"
        },
        xAxis : [

            {
                type : 'category',
                axisLine : {onZero: false},
                axisLabel : {
                    formatter: '{value} ',
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                },
                boundaryGap : false,
                data : ['1','2','3','4','5','6','7']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value}',
                    textStyle: {
                        color: '#fff'
                    }
                },

                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],
        series : [
            {
                name:'一周中垃圾量',
                type:'line',
                smooth:true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor : 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data:[1237,861,974,883,976,1102,1264]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
function char4() {

    var myChart = echarts.init($("#char4")[0]);

    option = {
        grid: {show:'true',borderWidth:'0'},
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },

            formatter: function (params) {
                var tar = params[0];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },

        xAxis : [
            {
                type : 'category',
                splitLine: {show:false},
                data : ['壹','贰','叁','肆','伍','陆'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine: {show:false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series : [

            {
                name:'增长率',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data:[-0.4367, 0.1157, -0.103, 0.1465, 0.1143, 0.1281]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
