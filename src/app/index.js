import '../style/app.scss';
import { selectLine, selectAll, selectByClickedElement } from "./action";

function init() {
    calcTableColumnOffset();
    addEventListener('resize', () => calcTableColumnOffset());
    document.querySelector('.table__column-dates-row.dropdown-content-row').style.borderTop = "1px solid rgba(17,34,62,0.07)";

    const checkboxs = document.querySelectorAll(".table__cell-left-content .checkbox-container input");
    checkboxs.forEach((checkbox) => {
        checkbox.addEventListener("click", (event) => selectLine(event.target));
    });

    document.querySelector(".table__column-header .checkbox-container input").addEventListener("click",(event) =>  selectAll(event.target));
    const contentCells = document.querySelectorAll(".dropdown-content-row .table__cell > div");
    contentCells.forEach((cell) => {
      cell.addEventListener("mouseenter", (event) => selectByClickedElement(event.target));
      cell.addEventListener("mouseleave", (event) => selectByClickedElement(event.target));
    })
}

const calcTableColumnOffset = () => {
    const tableColumn = document.querySelector(".table__column");
    const tableColumnDates = document.querySelector(".table__column-dates");
    tableColumn.style.marginBottom = tableColumnDates.offsetHeight - tableColumnDates.clientHeight + 'px';
}

init();