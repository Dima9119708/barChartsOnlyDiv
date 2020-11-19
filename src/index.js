import './css/main.css'

const elements = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13]
const uniqueElements = [...new Set(elements)].sort((a, b) => a - b)
const $chartY = document.getElementById('charts-y')
const $chart  = document.getElementById('charts')


;(() => {
  appendElementsY()
  appendColumn()
  animateColumns()
})();


function animateColumns() {

  Array
    .from($chart.children)
    .forEach((column, i) => {

      const getHeight = column.style.height
      column.style.height = 0
      setTimeout(() => column.style.height = getHeight, 10 * i)

    })
}

function appendElementsY() {

  const HTMLstring = uniqueElements.map( item => `
    <div class="charts-y_item">${item}</div>
  `)
  .join('')

  $chartY.insertAdjacentHTML('beforeend', HTMLstring)
}


function appendColumn() {

  const HTMLstring = elements.reduce( (acc, item, i) => {

    if (i < 5) acc.push(createColumn('#32CD32', i, item))
    else if (i < 10) acc.push(createColumn('#FFFF00', i, item))
    else acc.push(createColumn('#CD5C5C', i, item))

    return acc
  }, []).join('')

  $chart.insertAdjacentHTML('beforeend', HTMLstring)
}


function createColumn(color, index, item) {

  const getIndex = uniqueElements.indexOf(item) + 1

  return `
    <div
        style="
          background-color: ${color};
          height: ${ getIndex * 30 }px;
          transition: height .50s ease-out;
        "
          class="charts-column"
        >
          <div class="charts-column-number">${index + 1}</div>
    </div>
  `
}
