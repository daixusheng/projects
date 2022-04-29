const draggable = document.getElementById('draggable');
const droppable = document.getElementById('droppable');

draggable.addEventListener('dragstart', handleDragStart);
function handleDragStart(e) {
  e.dataTransfer.setData("text/plain", event.target.id);
}

droppable.addEventListener('dragover', handleDragOver);
function handleDragOver(e) {
  e.preventDefault();
  droppable.classList.add('dragover')
}

droppable.addEventListener('dragleave', handleDragLeave);
function handleDragLeave() {
  droppable.classList.remove('dragover');
}

droppable.addEventListener('drop', handleDrop);
function handleDrop(e) {
  e.preventDefault();
  // const draggedId = e.dataTransfer.getData('text/plain');
  // droppable.appendChild(document.getElementById(draggedId));
  droppable.classList.add('dropped');

  [...e.dataTransfer.items].forEach((item) => {
    if (item.kind === 'file') {
      const file = item.getAsFile();
      createPreview(file);
    }
  });
}

function createPreview(imageFile) {
  if (!imageFile.type.startsWith('image/')) {
    return;
  }

  const image = document.createElement('img');
  image.src = URL.createObjectURL(imageFile);
  image.onload = function () {
    URL.revokeObjectURL(this.src);
  };
  droppable.appendChild(image);
}