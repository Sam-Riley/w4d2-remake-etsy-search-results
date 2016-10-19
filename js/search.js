var container = document.createElement('div')
//console.dir(container)

var row  = document.createElement('div')
row.classList.add('row')
container.appendChild(row)



var col = document.createElement('div')
col.classList.add('col-sm-4')
col.setAttribute('title', 'A fancy column')
var col2 = col.cloneNode(true)
var col3 = col.cloneNode(true)

col.innerHTML = 'Column A'
col2.innerHTML = 'Column B'
col3.innerHTML = 'Column C'

row.appendChild(col)
row.appendChild(col2)
row.appendChild(col3)

/* <div class="input-group">
     <input type="text" class="form-control" placeholder="Search for...">
     <span class="input-group-btn">
       <button class="btn btn-default" type="button">Go!</button>
     </span>
   </div> */

   var searchDiv = document.createElement('div')
   searchDiv.classList.add('input-group')

   var span = document.createElement('span')
   span.classList.add('input-group-btn')

   var button = document.createElement('button')
   button.type = 'button'
   button.className = 'btn btn-default'
   button.innerHTML = 'Search!!!'



//<input type="text" id="search" placeholder="Search...">
var searchInput = document.createElement('input')
searchInput.type = 'text'
searchInput.placeholder = 'Search...'
searchInput.id = 'search'
searchInput.className = 'form-control'

searchDiv.appendChild(searchInput)
span.appendChild(button)    //<----this needs to be above searchDiv because its the parent(need to follow what CSS wants...)
searchDiv.appendChild(span)


container.insertBefore(searchDiv, row)
container.insertBefore(document.createElement('br'), searchDiv)
container.insertBefore(document.createElement('br'), row) //<---Could use searchDiv.nextSibling to achieve same effect

button.addEventListener('click', search) //<--- Use a named function
searchInput.addEventListener('keypress', searchEnter)  //<---So that the enter button works when searching

function searchEnter(event) {
   if (event.key === 'Enter') {   //<---"If the key is enter then we search"
      search()
   }
   console.log(event.key === 'Enter')  //<----setting the enter key to the event we have defined
}

function search() {
   //alert('You searched!!!') <----example of an input you can use
   var searchTerm = document.querySelector('#search').value //<----OR .getAttribute
   var searchResult = {
      term: searchTerm,
      image: 'http://unsplash.it/400?random',

   }

   createSearchResult(searchResult)
   document.querySelector('#search').value = ''
}

function createSearchResult(result) {
   var card = document.createElement('div')
   card.className = 'well'
   card.innterHTML = result.term
   document.querySelector('#searchResults .col-sm-4:first-child').appendChild(card)

}



document.getElementById('searchResults').appendChild(container)
