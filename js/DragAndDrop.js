"use strict";

class DragAndDrop {
  #dragElementId;
  #dropZoneId;
  #dragElement;
  #dropZone;

  constructor(dragElementId, dropZoneId) {
    this.#dragElementId = dragElementId;
    this.#dropZoneId = dropZoneId;

    this.render(dragElementId, dropZoneId);
    this.#dragElement = document.getElementById(dragElementId);
    this.#dropZone = document.getElementById(dropZoneId);

    // Bind event listeners
    this.getDragElement.addEventListener(
      "dragstart",
      this.dragStart.bind(this)
    );
    this.getDropZone.addEventListener("dragover", this.dragOver.bind(this));
    this.getDropZone.addEventListener("drop", this.drop.bind(this));
  }

  get getDragElementId() {
    return this.#dragElementId;
  }

  get getDropZoneId() {
    return this.#dropZoneId;
  }

  get getDragElement() {
    return this.#dragElement;
  }

  get getDropZone() {
    return this.#dropZone;
  }

  dragStart(event) {
    event.dataTransfer.setData("text/plain", this.getDragElementId);
  }

  dragOver(event) {
    event.preventDefault();
  }

  drop(event) {
    const data = event.dataTransfer.getData("text/plain");

    this.getDragElement.remove();

    const newElement = document.createElement("div");
    newElement.innerText = data;
    newElement.className = "dragged";

    this.getDropZone.appendChild(newElement);
  }

  render(idDrag, idDrop) {
    const dragElements = document.getElementById("dragElements");
    const dropZones = document.getElementById("dropZones");

    const drag = document.createElement("div");
    drag.id = idDrag;
    drag.className = "drag";
    drag.innerText = this.getDragElementId;
    drag.draggable = true;
    dragElements.appendChild(drag);
    const drop = document.createElement("div");
    drop.id = idDrop;
    drop.className = "drop-zone";
    dropZones.appendChild(drop);
  }
}
