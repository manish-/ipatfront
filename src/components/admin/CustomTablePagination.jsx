import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import Divider from '@mui/material/Divider';
import { TableRow, TableCell } from '@mui/material';

const CustomTablePagination = (props) => {

    return <React.Fragment>
        <TableRow>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: 1000 }]}
                colSpan={props.colSpan}
                count={props.total}
                rowsPerPage={props.itemPerPage}
                page={props.page - 1}
                SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                }}
                onPageChange={props.handleChangePage}
                onRowsPerPageChange={props.handleChangeRowsPerPage}

            />
        </TableRow>
    </React.Fragment>
};

export default CustomTablePagination;
