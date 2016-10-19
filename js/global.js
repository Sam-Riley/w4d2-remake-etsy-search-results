var container = document.createElement('div')

var row = document.createElement('div')
row.classList.add('row')
container.appendChild(row)


var col = document.createElement('div')
col.classList.add('col-sm-4')
var col2 = col.cloneNode(true)
var col3 = col.cloneNode(true)
var col4 = col.cloneNode(true)
//tried using in class example to target col-sm-4 and add my picture. 
col.innerHtml = '<img src=http://unsplash.it/400?image=22 />'
col2.innerHtml = '<img src=http://unsplash.it/400?image=22 />'
col3.innerHtml = '<img src=http://unsplash.it/400?image=22 />'
col4.innerHtml = '<img src=http://unsplash.it/400?image=22 />'

row.appendChild(col)
row.appendChild(col2)
row.appendChild(col3)
row.appendChild(col4)
