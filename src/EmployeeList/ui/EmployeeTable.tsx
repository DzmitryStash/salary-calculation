import React from 'react'
import {
    TableCell,
    withStyles,
    makeStyles,
    Paper,
    TableRow,
    TableContainer,
    Table,
    TableBody,
    TableHead,
    IconButton, TablePagination, TableFooter,
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
    },
    layout: {
        display: 'flex',
        flexDirection: 'column'
    },
}));

const EmployeeTable = (props: any) => {

    const {
        rowsPerPage,
        handleDeleteButton,
        workers,
        handleChangeRowsPerPage,
        page,
        handleChangePage
    } = props
    const classes = useStyles()

    return (
        <div className={classes.layout}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Сотруники</StyledTableCell>
                            <StyledTableCell align="right">Должность&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">Оклад&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">Несовершеннолетние дети&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">действия&nbsp;</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {workers?.workerQuery?.map((row: any) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.duty}</StyledTableCell>
                                <StyledTableCell align="right">{row.salary}</StyledTableCell>
                                <StyledTableCell align="right">{row.kids}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <IconButton
                                        aria-label="delete"
                                        onClick={handleDeleteButton(row.id)}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[2, 5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={workers.workers.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    )
}

export default EmployeeTable