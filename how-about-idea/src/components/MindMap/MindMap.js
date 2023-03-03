import React, { useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import fcose from "cytoscape-fcose"; // 확장 레이아웃
import cytoscape from "cytoscape";

cytoscape.use(fcose); // 확장 레이아웃 사용 등록

const MindMap = () => {
  const [width, setWith] = useState("100%");
  const [height, setHeight] = useState("500px");
  const [graphData, setGraphData] = useState({
    nodes: [
      { data: { id: "1", label: "선풍기", type: "level1" } },
      { data: { id: "2", label: "날개", type: "level2" } },
      { data: { id: "3", label: "바람", type: "level2" } },
      { data: { id: "4", label: "전동기", type: "level2" } },
      { data: { id: "5", label: "회전", type: "level3" } },
      { data: { id: "6", label: "비행기", type: "level3" } },
      { data: { id: "7", label: "유체", type: "level3" } },
      { data: { id: "8", label: "공기", type: "level3" } },
      { data: { id: "9", label: "흐름", type: "level3" } },
      { data: { id: "10", label: "기압", type: "level3" } },
      { data: { id: "11", label: "전기", type: "level3" } },
      { data: { id: "12", label: "회전", type: "level3" } },
    ],
    edges: [
      {
        data: { source: "1", target: "2", label: "1 -> 2" },
      },
      {
        data: { source: "1", target: "3", label: "1 -> 3" },
      },
      {
        data: { source: "1", target: "4", label: "1 -> 4" },
      },
      {
        data: { source: "2", target: "5", label: "2 -> 5" },
      },
      {
        data: { source: "2", target: "6", label: "2 -> 5" },
      },
      {
        data: { source: "2", target: "7", label: "2 -> 7" },
      },
      {
        data: { source: "3", target: "8", label: "3 -> 8" },
      },
      {
        data: { source: "3", target: "9", label: "3 -> 9" },
      },
      {
        data: { source: "3", target: "10", label: "3 -> 10" },
      },
      {
        data: { source: "4", target: "11", label: "4 -> 11" },
      },
      {
        data: { source: "4", target: "12", label: "4 -> 12" },
      },
    ],
  });

  const layout = {
    // name: "breadthfirst",
    name: "fcose",
    // fit: true,
    // circle: true,
    // directed: true,
    // padding: 50,
    // // spacingFactor: 1.5,
    // animate: true,
    // animationDuration: 1000,
    // avoidOverlap: true,
    // nodeDimensionsIncludeLabels: false,

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
    padding: 30,
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

  const styleSheet = [
    {
      selector: "node",
      style: {
        width: 120, // size of node circle
        height: 120,
        label: "data(label)",

        /* background props */
        backgroundColor: "white",

        // width: "mapData(score, 0, 0.006769776522008331, 20, 60)",
        // height: "mapData(score, 0, 0.006769776522008331, 20, 60)",
        "text-valign": "center",
        "text-halign": "center",
        "overlay-padding": "6px",
        "z-index": "10",
        //text props
        // "text-outline-color": "#4a56a6",
        // "text-outline-width": "2px",
        color: "black",
        fontSize: 25,
      },
    },
    {
      selector: "node:selected",
      style: {
        "border-width": "6px",
        "border-color": "#AAD8FF",
        "border-opacity": "0.5",
        "background-color": "#77828C",
        width: 50,
        height: 50,
        //text props
        "text-outline-color": "#77828C",
        "text-outline-width": 8,
      },
    },
    {
      selector: "node[type='level1']",
      style: {
        width: 150,
        height: 150,
        backgroundColor: "#FF7C80",
        color: "white",
      },
    },
    {
      selector: "node[type='level2']",
      style: {
        width: 125,
        height: 125,
        color: "white",
      },
    },
    {
      selector: "node[type='level3']",
      style: {
        width: 100,
        height: 100,

        "border-width": "2px",
        "border-color": "#E1E1E1",
      },
    },
    {
      selector: "node[id='2']",
      style: {
        backgroundColor: "#9933FF",
      },
    },
    {
      selector: "node[id='3']",
      style: {
        backgroundColor: "#9DC3E6",
      },
    },
    {
      selector: "node[id='4']",
      style: {
        backgroundColor: "#FFC000",
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

  let myCyRef;

  return (
    <>
      <div>
        <h3>마인드맵</h3>
        <div
          style={{
            border: "1px solid",
            backgroundColor: "#f5f6fe",
          }}
        >
          <CytoscapeComponent
            elements={CytoscapeComponent.normalizeElements(graphData)}
            // pan={{ x: 200, y: 200 }}
            style={{ width: width, height: height }}
            zoomingEnabled={true}
            maxZoom={3}
            minZoom={0.1}
            autounselectify={false}
            boxSelectionEnabled={true}
            layout={layout}
            stylesheet={styleSheet}
            cy={(cy) => {
              myCyRef = cy;

              console.log("EVT", cy);

              cy.on("tap", "node", (evt) => {
                var node = evt.target;
                console.log("EVT", evt);
                console.log("TARGET", node.data());
                console.log("TARGET TYPE", typeof node[0]);
              });
            }}
            abc={console.log("myCyRef", myCyRef)}
          />
        </div>
      </div>
    </>
  );
};

export default MindMap;
