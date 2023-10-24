var sdt = [
    {
        groups: [
            {
                id: 100000,
                title: "Estudios",
                content: "Estudios",
                treeLevel: 1,
                nestedGroups: [101000, 102000, 103000, 104000, 105000, 106000, 107000]
            },
            {
                id: 200000,
                title: "Concursos Académicos",
                content: "Concursos Académicos",
                treeLevel: 1,
                nestedGroups: [201000, 202000]
            },
            {
                id: 300000,
                title: "Laboral",
                content: "Laboral",
                treeLevel: 1,
                nestedGroups: [301000, 302000]
            },
            {
                id: 400000,
                title: "Hobbies",
                content: "Hobbies",
                treeLevel: 1,
                nestedGroups: [401000]
            },
            {
                id: 500000,
                title: "Deportes",
                content: "Deportes",
                treeLevel: 1,
                nestedGroups: [501000, 502000, 503000, 504000]
            },
            {
                id: 600000,
                title: "Gaming",
                content: "Gaming",
                treeLevel: 1,
                nestedGroups: [601000, 602000, 603000]
            },
            {
                id: 101000,
                title: "Primaria",
                content: "Primaria",
                treeLevel: 2
            },
            {
                id: 102000,
                title: "Secundaria",
                content: "Secundaria",
                treeLevel: 2
            },
            {
                id: 103000,
                title: "Bachillerato",
                content: "Bachillerato",
                treeLevel: 2
            },
            {
                id: 104000,
                title: "Bachillerato Internacional",
                content: "Bachillerato Internacional",
                treeLevel: 2
            },
            {
                id: 105000,
                title: "Investigación",
                content: "Investigación",
                treeLevel: 2
            },
            {
                id: 106000,
                title: "Licenciatura",
                content: "Licenciatura",
                treeLevel: 2
            },
            {
                id: 107000,
                title: "Autodidacta",
                content: "Autodidacta",
                treeLevel: 2
            },
            {
                id: 201000,
                title: "Matemáticas",
                content: "Matemáticas",
                treeLevel: 2
            },
            {
                id: 202000,
                title: "Programación",
                content: "Programación",
                treeLevel: 2
            },
            {
                id: 301000,
                title: "Docencia",
                content: "Docencia",
                treeLevel: 2
            },
            {
                id: 302000,
                title: "Desarrollo de Software BackEnd",
                content: "Desarrollo de Software BackEnd",
                treeLevel: 2
            },
            {
                id: 401000,
                title: "Desarrollo de Software",
                content: "Desarrollo de Software",
                treeLevel: 2
            },
            {
                id: 501000,
                title: "Soccer",
                content: "Soccer",
                treeLevel: 2
            },
            {
                id: 502000,
                title: "Karate-Do",
                content: "Karate-Do",
                treeLevel: 2
            },
            {
                id: 503000,
                title: "Basketball",
                content: "Basketball",
                treeLevel: 2
            },
            {
                id: 504000,
                title: "Atletismo",
                content: "Atletismo",
                treeLevel: 2
            },
            {
                id: 601000,
                title: "Need For Speed III: Hot Pursuit",
                content: "Need For Speed III: Hot Pursuit",
                treeLevel: 2
            },
            {
                id: 602000,
                title: "MecaPumble",
                content: "MecaPumble",
                treeLevel: 2
            },
            {
                id: 603000,
                title: "Rocket League",
                content: "Rocket League",
                treeLevel: 2
            }
        ]
    }
];
  
let startDay = "2023-10-10";

// DOM element where the Timeline will be attached
var container = document.getElementById("visualization");

// create a data set with groups
var groups = new vis.DataSet();

groups.add(sdt[0].groups);
  
// create a dataset with items
var items = new vis.DataSet();

items.add([
    {
        id: 101001,
        group: 101000,
        content: "Prueba 1",
        start: "2006-08-22",
        end: "2012-07-20"
    },
    {
        id: 104001,
        group: 104000,
        content: "Prueba 2",
        start: "2016-08-08",
        end: "2018-05-16"
    }
]);
  
  // specify options
  let options = {
    start: startDay,
    end: new Date(1000 * 60 * 60 * 24 + new Date().valueOf()),
    horizontalScroll: true,
    zoomKey: "ctrlKey",
    orientation: "both",
    zoomMin: 1000 * 60 * 60 * 240,
    autoResize: true
  };
  
  // create a Timeline
  var timeline = new vis.Timeline(container, items, groups, options);
  