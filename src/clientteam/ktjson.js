import team from './teamData';

var singleBlockTemplate = ({
  nodeId,
  name,
  dris = [],
  libraries = [],
  parentNodeId = null,
}) => ({
  nodeId,
  parentNodeId,
  width: 372,
  height: 246,
  borderWidth: 1,
  borderRadius: 5,
  borderColor: {
    red: 15,
    green: 140,
    blue: 121,
    alpha: 1,
  },
  backgroundColor: {
    red: 51,
    green: 182,
    blue: 208,
    alpha: 1,
  },
  nodeImage: {
    url: '',
    width: 100,
    height: 100,
    centerTopDistance: 0,
    centerLeftDistance: 0,
    cornerShape: 'CIRCLE',
    shadow: false,
    borderWidth: 0,
    borderColor: {
      red: 19,
      green: 123,
      blue: 128,
      alpha: 1,
    },
  },
  nodeIcon: {
    icon: 'https://to.ly/1yZnX',
    size: 30,
  },
  template: `<div style="font-size: 31px;display: flex;justify-content: center;align-items: center;height: 200;flex-direction:column">
    <h3>${name}</h3>
    <h4>DRIs</h4>
    <div>${dris.map((dri) => `<span>${dri} </span>`).join(',')}</div>
    <h4>Library Ownership</h4>
    <div>${libraries
      .map((library) => `<span>${library} </span>`)
      .join(',')}</div>
    </div>`,
  connectorLineColor: {
    red: 220,
    green: 189,
    blue: 207,
    alpha: 1,
  },
  connectorLineWidth: 5,
  dashArray: '',
  expanded: false,
  directSubordinates: 4,
  totalSubordinates: 1515,
});
let newArray = [];
function convertChartObject(team, newArray, prefix = '') {
  team.forEach((item, index) => {
    let nodeId = prefix != '' ? prefix + '-' + index : index + '';
    newArray.push(
      singleBlockTemplate({
        nodeId,
        name: item.name,
        parentNodeId: prefix,
        ...item,
      })
    );
    if (item.firstTeam) {
      convertChartObject(item.firstTeam, newArray, nodeId);
    }
  });
}
convertChartObject(team, newArray, '');
export default newArray;

// export default [
//   {
//     nodeId: 'O-1',
//     parentNodeId: null,
//     width: 342,
//     height: 146,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: {
//       red: 15,
//       green: 140,
//       blue: 121,
//       alpha: 1,
//     },
//     backgroundColor: {
//       red: 51,
//       green: 182,
//       blue: 208,
//       alpha: 1,
//     },
//     nodeImage: {
//       url: '',
//       width: 100,
//       height: 100,
//       centerTopDistance: 0,
//       centerLeftDistance: 0,
//       cornerShape: 'CIRCLE',
//       shadow: false,
//       borderWidth: 0,
//       borderColor: {
//         red: 19,
//         green: 123,
//         blue: 128,
//         alpha: 1,
//       },
//     },
//     nodeIcon: {
//       icon: 'https://to.ly/1yZnX',
//       size: 30,
//     },
//     template: `<div style="font-size: 31px;display: flex;justify-content: center;align-items: center;height: 100%;">
//       <div>Zohodesk Client Team</div>
//       </div>`,
//     connectorLineColor: {
//       red: 220,
//       green: 189,
//       blue: 207,
//       alpha: 1,
//     },
//     connectorLineWidth: 5,
//     dashArray: '',
//     expanded: false,
//     directSubordinates: 4,
//     totalSubordinates: 1515,
//   },
//   {
//     nodeId: 'O-2',
//     parentNodeId: 'O-1',
//     width: 331,
//     height: 139,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: {
//       red: 15,
//       green: 140,
//       blue: 121,
//       alpha: 1,
//     },
//     backgroundColor: {
//       red: 51,
//       green: 182,
//       blue: 208,
//       alpha: 1,
//     },
//     nodeImage: {
//       url: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
//       width: 100,
//       height: 100,
//       centerTopDistance: 0,
//       centerLeftDistance: 0,
//       cornerShape: 'CIRCLE',
//       shadow: false,
//       borderWidth: 0,
//       borderColor: {
//         red: 19,
//         green: 123,
//         blue: 128,
//         alpha: 1,
//       },
//     },
//     nodeIcon: {
//       icon: 'https://to.ly/1yZnX',
//       size: 30,
//     },
//     template:
//       '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         ">Davolio Nancy </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">CTO  </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         ">Business one</div>\n\n                 <div style="margin-left:190.5px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CEO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
//     connectorLineColor: {
//       red: 220,
//       green: 189,
//       blue: 207,
//       alpha: 1,
//     },
//     connectorLineWidth: 5,
//     dashArray: '',
//     expanded: false,
//     directSubordinates: 9,
//     totalSubordinates: 812,
//   },
//   {
//     nodeId: 'O-3',
//     parentNodeId: 'O-1',
//     width: 348,
//     height: 147,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: {
//       red: 15,
//       green: 140,
//       blue: 121,
//       alpha: 1,
//     },
//     backgroundColor: {
//       red: 51,
//       green: 182,
//       blue: 208,
//       alpha: 1,
//     },
//     nodeImage: {
//       url: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg',
//       width: 100,
//       height: 100,
//       centerTopDistance: 0,
//       centerLeftDistance: 0,
//       cornerShape: 'ORIGINAL',
//       shadow: false,
//       borderWidth: 0,
//       borderColor: {
//         red: 19,
//         green: 123,
//         blue: 128,
//         alpha: 1,
//       },
//     },
//     nodeIcon: {
//       icon: 'https://to.ly/1yZnX',
//       size: 30,
//     },
//     template:
//       '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         "> Leverling Janet </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">CTO  </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         ">Business two </div>\n\n                 <div style="margin-left:199px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CEO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
//     connectorLineColor: {
//       red: 220,
//       green: 189,
//       blue: 207,
//       alpha: 1,
//     },
//     connectorLineWidth: 5,
//     dashArray: '',
//     expanded: false,
//     directSubordinates: 3,
//     totalSubordinates: 413,
//   },
//   {
//     nodeId: 'O-4',
//     parentNodeId: 'O-1',
//     width: 345,
//     height: 140,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: {
//       red: 15,
//       green: 140,
//       blue: 121,
//       alpha: 1,
//     },
//     backgroundColor: {
//       red: 51,
//       green: 182,
//       blue: 208,
//       alpha: 1,
//     },
//     nodeImage: {
//       url: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg',
//       width: 100,
//       height: 100,
//       centerTopDistance: 0,
//       centerLeftDistance: 0,
//       cornerShape: 'ORIGINAL',
//       shadow: false,
//       borderWidth: 0,
//       borderColor: {
//         red: 19,
//         green: 123,
//         blue: 128,
//         alpha: 1,
//       },
//     },
//     nodeIcon: {
//       icon: 'https://to.ly/1yZnX',
//       size: 30,
//     },
//     template:
//       '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         "> Leverling Janet </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">CTO  </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         ">Business three</div>\n\n                 <div style="margin-left:197.5px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CEO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
//     connectorLineColor: {
//       red: 220,
//       green: 189,
//       blue: 207,
//       alpha: 1,
//     },
//     connectorLineWidth: 5,
//     dashArray: '',
//     expanded: false,
//     directSubordinates: 3,
//     totalSubordinates: 142,
//   },
//   {
//     nodeId: 'O-5',
//     parentNodeId: 'O-1',
//     width: 311,
//     height: 134,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: {
//       red: 15,
//       green: 140,
//       blue: 121,
//       alpha: 1,
//     },
//     backgroundColor: {
//       red: 51,
//       green: 182,
//       blue: 208,
//       alpha: 1,
//     },
//     nodeImage: {
//       url: 'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg',
//       width: 100,
//       height: 100,
//       centerTopDistance: 0,
//       centerLeftDistance: 0,
//       cornerShape: 'ROUNDED',
//       shadow: false,
//       borderWidth: 0,
//       borderColor: {
//         red: 19,
//         green: 123,
//         blue: 128,
//         alpha: 1,
//       },
//     },
//     nodeIcon: {
//       icon: 'https://to.ly/1yZnX',
//       size: 30,
//     },
//     template:
//       '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         "> Leverling Janet </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">CTO  </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         ">Business four </div>\n\n                 <div style="margin-left:180.5px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CEO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
//     connectorLineColor: {
//       red: 220,
//       green: 189,
//       blue: 207,
//       alpha: 1,
//     },
//     connectorLineWidth: 5,
//     dashArray: '',
//     expanded: false,
//     directSubordinates: 3,
//     totalSubordinates: 144,
//   },
// ];
