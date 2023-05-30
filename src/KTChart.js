import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import TreeChart from 'd3-org-chart';
export default class KTChart extends React.Component {
  constructor(props) {
    super(props);
    this.createDiagram = this.createDiagram.bind(this);
  }

  componentDidMount() {
    this.createDiagram();
  }

  componentDidUpdate(prevProps, prevState) {
    this.createDiagram();
  }

  render() {
    return (
      <main className="main">
        <div id="portal" />
        <header className="header">ZOHODESK CLIENT FIRST TEAM MEETING</header>
        <div className="container" ref={(node) => (this.node = node)}></div>
      </main>
    );
  }

  createDiagram() {
    const node = this.node;

    if (!this.props.data) {
      return;
    }
    if (!this.chart) {
      this.chart = new TreeChart();
    }

    this.chart
      .container(node)
      .backgroundColor('none')
      .data(this.props.data)
      .svgWidth(500)
      .initialZoom(0.2)
      .onNodeClick((nodeid) => {
        let value =
          this.props.data &&
          this.props.data.filter((obj) => {
            return obj.nodeId == nodeid;
          })[0];
        detailsView(value);
        console.log(value, 'asdas');
      })
      .render();
  }
}

function detailsView(data) {
  console.log(data, 'asd');
  let HTMLDATA = `<div style='position:fixed;z-index:1;right:0;bottom:0;background:#000000b0;width:400px;height:400px'>
                      <div style='margin:20px;width:360px;height:360px;background:#fff'>
                          <div>${data.name}</div>
                          <div>${data.dris
                            .map((dri) => `<span>${dri} </span>`)
                            .join(',')}</div>
                          <div>${data.libraries.map(
                            (library) =>
                              ` <div style='padding-left:50px'>* ${library} </div>`
                          )}</div>
                      </div>
                  </div>`;
  document.getElementById('portal').innerHTML = HTMLDATA;
}
