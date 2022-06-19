// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('skills'));

// 指定图表的配置项和数据
var option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '6%',
        top:'1%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine: {
            show: true
        },
        axisTick: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: ['沟通协作', 'Vue框架', 'React框架', '项目开发', '静态页面', '基础知识']
    },

    series: [
        {   name:'',
            type: 'bar',
            barWidth:19,
            data: [80, 75, 90, 90, 75, 90] ,
            itemStyle:{
                normal:{
                    color: 'rgb(14, 131, 205)'
                }
            }
        },

    ],
};

myChart.setOption(option);






/*var option = {
  tooltip: {},
  radar: {
      // shape: 'circle',
      name: {
          textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
          }
      },
      indicator: [
        { name: '静态页面', max: 100},
        { name: '编程基础', max: 100},
        { name: 'Vue', max: 100},
        { name: 'React', max: 100},
        { name: '项目开发', max: 100},
        { name: '沟通能力', max: 100}
      ]
  },
  series: [{
      name: '预算 vs 开销（Budget vs spending）',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [
          {
              value: [100, 70, 90, 80, 85, 70],
              name: '能力雷达'
          }
      ]
  }]
};
*/
// 使用刚指定的配置项和数据显示图表。
/*myChart.setOption(option);*/