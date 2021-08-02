export const selectLine = (element) => {
  const columnRow = element.closest(".column-row");

	const columnRows = [...document.querySelectorAll(".table__column .column-row")]
		.filter((elem) => !elem.classList.contains("dropdown-content-row"));

	const rowsDates = [...document.querySelectorAll(".table__column-dates > div")]
		.filter((elem) => !elem.classList.contains("dropdown-content-row"));

	const indexRow = columnRows.indexOf(columnRow);

  rowsDates[indexRow].querySelectorAll(".table__cell")
		.forEach((cell) => {
			cell.classList.toggle("highlighted");  
	});
}

export const selectAll = () => {
  const cells = document.querySelectorAll(".table__column-dates-row .table__cell");
	const checkboxs = document.querySelectorAll(".table__cell-left-content input");

  for (let cell of cells) {
    cell.classList.toggle("highlighted");      
  }

	for (let checkbox of checkboxs) {
		checkbox.toggleAttribute("checked");
	}

}

export const selectByClickedElement = (element) => {
	const relativesElements = document.querySelectorAll("." + element.className);
	
	for (let elem of relativesElements) {
    elem.parentNode.classList.toggle("highlighted");      
  }
}