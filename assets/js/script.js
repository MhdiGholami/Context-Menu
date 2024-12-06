// Custom ContextMenu Project
// ******************************


let contextMenu = document.getElementById('contextMenuId')

// Function for show context menu
function contextMenuHandler(event) {
  event.preventDefault()

  contextMenu.style.top = event.pageY + 'px'
  contextMenu.style.left = event.pageX + 'px'
  contextMenu.style.display = 'block'
}

// Function for click to hide context menu
function clickHandler() {
  contextMenu.style.display = 'none'
}