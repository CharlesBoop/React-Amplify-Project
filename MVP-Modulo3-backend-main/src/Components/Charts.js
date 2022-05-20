import * as React from 'react';
import "../CSS/chartsComponent.css"
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveLine } from '@nivo/line';

  export default function Charts(props){    
    const barData = [
        {
            "month": "Jan",
            "solved": 137,
            "not solved": 145,
        },
        {
            "month": "Feb",
            "solved": 68,
            "not solved": 91,
        },
        {
            "month": "Mar",
            "solved": 39,
            "not solved": 184,
        },
        {
            "month": "Apr",
            "solved": 160,
            "not solved": 51,
        },
        {
            "month": "May",
            "solved": 81,
            "not solved": 48,
        },
        {
            "month": "Jun",
            "solved": 76,
            "not solved": 87,
        }
    ];
    
    const donutData = [
        {
            id: "account",
            label: "account",
            value: 19,
          },
          {
            id: "shipping",
            label: "shipping",
            value: 54,
          },
          {
            id: "product",
            label: "product",
            value: 47,
          }
    ];

    const lineData = [

        {
            "id": "General",
            "data": [
              {
                "x": "Jan",
                "y": 50
              },
              {
                "x": "Feb",
                "y": 55
              },
              {
                "x": "Mar",
                "y": 55
              },
              {
                "x": "Apr",
                "y": 70
              },
              {
                "x": "May",
                "y": 75
              },
              {
                "x": "Jun",
                "y": 85
              },
              {
                "x": "Jul",
                "y": 105
              },
              {
                "x": "Aug",
                "y": 105
              },
              {
                "x": "Sep",
                "y": 85
              },
              {
                "x": "Oct",
                "y": 50
              },
              {
                "x": "Nov",
                "y": 35
              },
              {
                "x": "Dec",
                "y": 35
              }
            ]
          },

        {
            "id": "Agent",
            "data": [
              {
                "x": "Jan",
                "y": 20
              },
              {
                "x": "Feb",
                "y": 40
              },
              {
                "x": "Mar",
                "y": 30
              },
              {
                "x": "Apr",
                "y": 50
              },
              {
                "x": "May",
                "y": 60
              },
              {
                "x": "Jun",
                "y": 65
              },
              {
                "x": "Jul",
                "y": 75
              },
              {
                "x": "Aug",
                "y": 90
              },
              {
                "x": "Sep",
                "y": 60
              },
              {
                "x": "Oct",
                "y": 30
              },
              {
                "x": "Nov",
                "y": 20
              },
              {
                "x": "Dec",
                "y": 15
              }
            ]
          }                    
    ];

   

    return (
        
        <div className='AgentPage'>

            <div className='AgentInfo'>
                <h1 className='Name'>{props.name}</h1>
                <h2 className='Id'>{props.id}</h2>
            </div>
            <div className='WrapperCharts'>
                <div className='WrapperChart donut-chart'>
                    <ResponsivePie
                        data={donutData}
                        margin={{ top: 30, right: 85, bottom: 60, left: 85 }}
                        innerRadius={0.5}
                        padAngle={0.7}
                        cornerRadius={3}
                        activeOuterRadiusOffset={8}
                        borderWidth={1}
                        colors={["#9fa8da", "#d1d9ff", "#6f79a8"]}
                        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                        arcLinkLabelsSkipAngle={10}
                        arcLinkLabelsTextColor="#333333"
                        arcLinkLabelsThickness={2}
                        arcLinkLabelsColor={{ from: "color" }}
                        arcLabelsSkipAngle={10}
                        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'bottom',
                                direction: 'row',
                                justify: false,
                                translateX: 20,
                                translateY: 45,
                                itemsSpacing: 2,
                                itemWidth: 90,
                                itemHeight: 10,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 15,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </div>

                <div className='WrapperChart bar-chart'>
                <ResponsiveBar
                        data={barData}
                        keys={[
                            'solved',
                            'not solved'
                        ]}
                        indexBy="month"
                        margin={{ top: 30, right: 30, bottom: 60, left: 50 }}
                        padding={0.3}
                        groupMode="grouped"
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}   
                        colors={["#9fa8da", "#6f79a8"]}      
                        borderColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    1.6
                                ]
                            ]
                        }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legendPosition: 'middle',
                            legendOffset: 32
                            
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legendPosition: 'middle',
                            legendOffset: -40
                        }}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    1.6
                                ]
                            ]
                        }}
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'bottom',
                                direction: 'row',
                                justify: false,
                                translateX: 20,
                                translateY: 45,
                                itemsSpacing: 2,
                                itemWidth: 90,
                                itemHeight: 10,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 15,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                        role="application"
                        ariaLabel="Nivo bar chart demo"
                        barAriaLabel={function (e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
                    />
                </div> 

                <div className='WrapperChart line-chart'>
                    <ResponsiveLine
                        data={lineData}
                        margin={{ top: 30, right: 30, bottom: 65, left: 50 }}
                        xScale={{ type: 'point' }}
                        yScale={{
                            type: 'linear',
                            min: 'auto',
                            max: 'auto',
                            stacked: false,
                            reverse: false
                        }}
                        yFormat=" >-.2f"
                        colors={["#6f79a8", "#9fa8da"]}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legendOffset: 36,
                            legendPosition: 'middle'
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legendOffset: -40,
                            legendPosition: 'middle'
                        }}
                        pointSize={10}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={[
                            {
                                anchor: 'bottom',
                                direction: 'row',
                                justify: false,
                                translateX: 20,
                                translateY: 55,
                                itemsSpacing: 2,
                                itemDirection: 'left-to-right',
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                symbolSize: 15,
                                symbolShape: 'circle',
                                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground: 'rgba(0, 0, 0, .03)',
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
      
    );
  }