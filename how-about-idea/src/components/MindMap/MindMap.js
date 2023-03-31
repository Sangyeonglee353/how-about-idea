import React, { useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import fcose from "cytoscape-fcose"; // 확장 레이아웃
import cytoscape from "cytoscape";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const MindMapCSS = styled.div`
  position: relative;
  background-color: transparent;
`;

const RefreshBtn = styled(FontAwesomeIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 20;
  width: 30px;
  height: 30px;
  color: var(--color-sub-grey);
  cursor: pointer;
`;
cytoscape.use(fcose); // 확장 레이아웃 사용 등록

const MindMap = (props) => {
  let myCyRef; // grpah에 event를 주기 위한 변수

  /* Layout Setting */
  const layout = {
    name: "fcose",

    /* fcose default option */
    // 'draft', 'default' or 'proof'
    // - "draft" only applies spectral layout
    // - "default" improves the quality with incremental layout (fast cooling rate)
    // - "proof" improves the quality with incremental layout (slow cooling rate)
    quality: "default",
    // Use random node positions at beginning of layout
    // if this is set to false, then quality option must be "proof"
    randomize: true,
    // Whether or not to animate the layout
    animate: true,
    // Duration of animation in ms, if enabled
    animationDuration: 1000,
    // Easing of animation, if enabled
    animationEasing: undefined,
    // Fit the viewport to the repositioned nodes
    fit: true,
    // Padding around layout
    padding: 15,
    // Whether to include labels in node dimensions. Valid in "proof" quality
    nodeDimensionsIncludeLabels: false,
    // Whether or not simple nodes (non-compound nodes) are of uniform dimensions
    uniformNodeDimensions: false,
    // Whether to pack disconnected components - cytoscape-layout-utilities extension should be registered and initialized
    packComponents: true,
    // Layout step - all, transformed, enforced, cose - for debug purpose only
    step: "all",

    /* spectral layout options */

    // False for random, true for greedy sampling
    samplingType: true,
    // Sample size to construct distance matrix
    sampleSize: 25,
    // Separation amount between nodes
    nodeSeparation: 75,
    // Power iteration tolerance
    piTol: 0.0000001,

    /* incremental layout options */
    // Node repulsion (non overlapping) multiplier
    nodeRepulsion: (node) => 4500,
    // Ideal edge (non nested) length
    idealEdgeLength: (edge) => 50,
    // Divisor to compute edge forces
    edgeElasticity: (edge) => 0.45,
    // Nesting factor (multiplier) to compute ideal edge length for nested edges
    nestingFactor: 0.1,
    // Maximum number of iterations to perform - this is a suggested value and might be adjusted by the algorithm as required
    numIter: 2500,
    // For enabling tiling
    tile: true,
    // The comparison function to be used while sorting nodes during tiling operation.
    // Takes the ids of 2 nodes that will be compared as a parameter and the default tiling operation is performed when this option is not set.
    // It works similar to ``compareFunction`` parameter of ``Array.prototype.sort()``
    // If node1 is less then node2 by some ordering criterion ``tilingCompareBy(nodeId1, nodeId2)`` must return a negative value
    // If node1 is greater then node2 by some ordering criterion ``tilingCompareBy(nodeId1, nodeId2)`` must return a positive value
    // If node1 is equal to node2 by some ordering criterion ``tilingCompareBy(nodeId1, nodeId2)`` must return 0
    tilingCompareBy: undefined,
    // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
    tilingPaddingVertical: 10,
    // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
    tilingPaddingHorizontal: 10,
    // Gravity force (constant)
    gravity: 0.25,
    // Gravity range (constant) for compounds
    gravityRangeCompound: 1.5,
    // Gravity force (constant) for compounds
    gravityCompound: 1.0,
    // Gravity range (constant)
    gravityRange: 3.8,
    // Initial cooling factor for incremental layout
    initialEnergyOnIncremental: 0.3,

    /* constraint options */
    // Fix desired nodes to predefined positions
    // [{nodeId: 'n1', position: {x: 100, y: 200}}, {...}]
    fixedNodeConstraint: undefined,
    // Align desired nodes in vertical/horizontal direction
    // {vertical: [['n1', 'n2'], [...]], horizontal: [['n2', 'n4'], [...]]}
    alignmentConstraint: undefined,
    // Place two nodes relatively in vertical/horizontal direction
    // [{top: 'n1', bottom: 'n2', gap: 100}, {left: 'n3', right: 'n4', gap: 75}, {...}]
    relativePlacementConstraint: undefined,

    /* layout event callbacks */
    ready: () => {}, // on layoutready
    stop: () => {}, // on layoutstop
  };

  /* randomColor */
  const randomColor = () => {
    let color_r = Math.floor(Math.random() * 127 + 128).toString(16);
    let color_g = Math.floor(Math.random() * 127 + 128).toString(16);
    let color_b = Math.floor(Math.random() * 127 + 128).toString(16);
    return `#${color_r + color_g + color_b}`;
  };

  /* Change node size for depth(pageRank) */
  // 1. rank를 활용하기 위해 data만 입력한 cytoscape 객체
  const cy_for_rank = cytoscape({ elements: props.graphData });
  // 2. elements들의 rank
  const pageRank = cy_for_rank.elements().pageRank();
  // 3. node & font size
  const nodeMaxSize = 130;
  const nodeMinSize = 100;
  const fontMaxSize = 50;
  const fontMinSize = 20;

  /* The stylesheet for the graph */
  const styleSheet = [
    {
      selector: "node",
      style: {
        /* Before style */
        // width: 120, // size of node circle
        // height: 120,
        // label: "data(label)",

        // /* background props */
        // backgroundColor: "white",

        // "text-valign": "center",
        // "text-halign": "center",
        // "overlay-padding": "6px",
        // "z-index": "10",
        // // width: "mapData(score, 0, 0.006769776522008331, 20, 60)",
        // // height: "mapData(score, 0, 0.006769776522008331, 20, 60)",

        // /* text props */
        // // "text-outline-color": "#4a56a6",
        // // "text-outline-width": "2px",
        // color: "black",
        // fontSize: 25,

        /* After style */
        label: "data(label)",
        color: "black",
        "background-color": "white",
        "text-valign": "center",
        "text-halign": "center",
        width: (ele) => {
          return nodeMaxSize * pageRank.rank("#" + ele.id()) + nodeMinSize;
        },
        height: (ele) => {
          return nodeMaxSize * pageRank.rank("#" + ele.id()) + nodeMinSize;
        },
        "font-size": (ele) => {
          return fontMaxSize * pageRank.rank("#" + ele.id()) + fontMinSize;
        },
      },
    },
    {
      selector: "node[type='level1']",
      style: {
        // backgroundColor: "#FF7C80",
        backgroundColor: randomColor(),
        color: "white",
      },
    },
    {
      selector: "node[type='level2']",
      style: {
        color: "white",
        backgroundColor: randomColor(),
      },
    },
    {
      selector: "node[type='level3']",
      style: {
        "border-width": "2px",
        "border-color": "#E1E1E1",
      },
    },
    {
      selector: "node:selected",
      style: {
        "border-width": "5px",
        "border-color": "#AAD8FF",
        "border-opacity": "0.5",
        "background-color": "#00b6ff",
        width: 180,
        height: 180,
        //text props
        "text-outline-color": "#beebfd",
        "text-outline-width": 5,
        "font-size": "30px",
        "font-weight": "bold",
        color: "#000",
      },
    },
    {
      selector: "edge",
      style: {
        width: 5,
        // "line-color": "#6774cb",
        "line-color": "#E1E1E1",
        // "target-arrow-color": "#6774cb",
        // "target-arrow-shape": "triangle",
        "curve-style": "bezier",
      },
    },
  ];

  /* addNode function */
  const addNode = () => {
    // 1. Initalize value
    let node_id = 0;
    if (props.graphData.length === 0) {
      node_id = 0;
    } else if (props.graphData.length === 1) {
      node_id = 1;
    } else {
      node_id = props.graphData.length - (props.graphData.length - 3) / 2;
    }
    let node_label = document.getElementById("node_label").value;
    let node_type = document.getElementById("node_type").value;
    let from_node = document.getElementById("from_node").value;
    let edge_id = from_node + "->" + node_id;

    // 2. Check input value
    if (node_label.length === 0 || from_node.length === 0) {
      alert("Please fill in the input box");
      return;
    }

    // 3. Add data of node & edge
    props.setGraphData((prev) => [
      ...prev,
      {
        data: {
          id: node_id,
          label: node_label,
          type: node_type,
        },
      },
      {
        data: {
          id: edge_id,
          source: node_id,
          target: from_node,
        },
      },
    ]);
  };

  /* Refresh Graph */
  const refreshGraph = () => {
    myCyRef.fit(15); // padding: 15
  };

  /* Automatic Resize Graph*/
  // let resizeTimer;
  // console.log("resizeTimer: ", resizeTimer);

  window.addEventListener("resize", () => {
    // this.clearTimeout(resizeTimer);
    // resizeTimer = this.setTimeout(() => {
    //   refreshGraph();
    // }, 200);
    refreshGraph();
  });

  return (
    <>
      <MindMapCSS>
        {props.onRefreshBtn && (
          <RefreshBtn icon="fa-arrow-rotate-right" onClick={refreshGraph} />
        )}
        <CytoscapeComponent
          elements={CytoscapeComponent.normalizeElements(props.graphData)}
          style={{ width: props.width, height: props.height }}
          userZoomingEnabled={props.onUserZoom} // 사용자 zoom controller
          zoomingEnabled={true}
          maxZoom={3}
          minZoom={0.1}
          autounselectify={props.onUnSelect}
          autoungrabify={props.onUnNodeMove}
          boxSelectionEnabled={true}
          layout={layout}
          stylesheet={styleSheet}
          cy={(cy) => {
            myCyRef = cy;
            // console.log("EVT", cy);
            // 각 노드 클릭시 데이터 출력
            cy.one("tap", "node", (evt) => {
              var node = evt.target;
              // console.log("EVT", evt);
              // console.log("TARGET", node.data());
              props.onSelectNodeHandler(node.data());
              // console.log("TARGET TYkPE", typeof node[0]);
            });
          }}
        />
      </MindMapCSS>
    </>
  );
};

export default MindMap;
