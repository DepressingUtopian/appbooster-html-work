import '../style/app.scss';

function init() {
    calcTableColumnOffset();
    window.addEventListener('resize', () => calcTableColumnOffset());
    document.querySelector('.table__column-dates-row.dropdown-content-row').style.borderTop = "1px solid rgba(17,34,62,0.07)";
}

const calcTableColumnOffset = () => {
    const tableColumn = document.querySelector(".table__column");
    const tableColumnDates = document.querySelector(".table__column-dates");
    tableColumn.style.marginBottom = tableColumnDates.offsetHeight - tableColumnDates.clientHeight + 'px';
}

init();