// js D# elements

// d3.select() -- returns the first selection of element that matches the criteria
// d3.selecttAll() -- returns all the selection of elements that mathes the criteria 

d3.select('h1').style('color', 'red')

// attr. can be used to put attributes to our elements
// .text('used to update the tag')



// append a paragraph tag
// d3.select('body').append('p').text('Hello world 1')
// d3.select('body').append('p').text('Hello world 2')
// d3.select('body').append('p').text('Hello world 3')

// we use the select all 
// d3.selectAll('p').style('color', 'blue')



// mow we try to push a data to DOM 

let data = [1,2,3,4,5]

d3.select('body')
.selectAll('p')
.data(data).
enter()
.append('p')
// .text('data added') loads text
.text(function(b) {return b}) // returns the data instead b is placeholder for data in data()


// barchart 

let dataSet = [90,34,133,76,345,23,87,45,324,2,1,657]

let svgWidth = 500, svgHeight = 300, barPadding =5
let barWidth = (svgWidth / dataSet.length) // width of per bar


let svg = d3.select('svg').attr('width', svgHeight).attr('height', svgHeight)
// enter will take our data from waiting state then perform further operations/data items
// for each data item we appen a rect
let barChart = svg.selectAll('rect').data(dataSet).enter().append('rect').attr('y', function(d) {return svgHeight -d}).attr("height", function(d){return d}).attr("width", barWidth - barPadding).attr("transform", function(d,i){let translate = [barWidth * i, 0]; return "translate("+translate+")"})