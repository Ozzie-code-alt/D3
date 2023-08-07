// js D# elements

// d3.select() -- returns the first selection of element that matches the criteria
// d3.selecttAll() -- returns all the selection of elements that mathes the criteria 

d3.select('h1').style('color', 'red')

// attr. can be used to put attributes to our elements
// .text('used to update the tag')



// append a paragraph tag
d3.select('body').append('p').text('Hello world 1')
d3.select('body').append('p').text('Hello world 2')
d3.select('body').append('p').text('Hello world 3')

// we use the select all 
d3.selectAll('p').style('color', 'blue')