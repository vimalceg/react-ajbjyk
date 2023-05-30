import team from './teamData';

var singleBlockTemplate = ({
  nodeId,
  name,
  image,
  dris = [],
  libraries = [],
  parentNodeId = null,
}) => {
  let orderIndex = nodeId.split('-').length;

  let a = `<h4 style='margin-top: 20px;color: #c64949;font-size: 13px;padding-left:10px'>Role : <span style='color: #991b1ba8;font-size: 12px;font-weight: 300;'>${dris
    .map((dri) => `<span>${dri} </span>`)
    .join(',')}</span></h4>
  
  <h4 style='margin: 10px 0;color: #c64949;font-size: 13px;padding-left:10px'>Owned By : </h4>
  <span style='color: #991b1ba8;font-size: 12px;font-weight: 300;'>${libraries.map(
    (library) => ` <div style='padding-left:50px'>* ${library} </div>`
  )}</span>`;

  let teamCardHTML = `<div style='color: #6e10b6; font-size: 70px; padding: 50px 0; text-align:center; font-weight:bold; line-height: 1.4'>${name}</div>`;

  let cardHTML = `<div style='text-align: center'>
    <img style='width:400px;height:400px;margin:70px 0 40px' src="${image}" />
    <div style='
      font-size: 60px;
      font-weight: bold;
      color: #000;
      margin: 0 30px;
    '>${name}</div>
  </div>`;
  let borderColor = {
    red: 103,
    green: 93,
    blue: 111,
    alpha: 1,
  };
  return {
    name,
    image,
    dris,
    libraries,
    // meta for detail
    nodeId,
    parentNodeId,
    width: orderIndex == 1 ? 600 : 600,
    height: orderIndex == 1 ? 280 : 640,
    borderWidth: 8,
    borderRadius: 20,
    borderColor,
    backgroundColor: {
      red: 255,
      green: 255,
      blue: 255,
      alpha: 1,
    },

    template: orderIndex == 1 ? teamCardHTML : cardHTML,
    connectorLineColor: {
      red: 103,
      green: 93,
      blue: 111,
      alpha: 1,
    },
    connectorLineWidth: 8,
    dashArray: '',
    expanded: false,
    directSubordinates: 4,
    totalSubordinates: 1515,
  };
};
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
