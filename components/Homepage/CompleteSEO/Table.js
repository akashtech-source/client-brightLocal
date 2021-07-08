import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Image from 'next/image';
import tick from '../../../public/tick.png';
import cross from '../../../public/cross.png';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#6854BA",
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('BrightLocal',  <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>),
  createData('Moz Local', <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>),
  createData('Yext', <Image src={cross} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>),
  createData('Whitespark', <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>),
  createData('Synup', <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>),
  createData('Tribe Local', <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={cross} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>, <Image src={tick} height="20px" width="20px" alt="12"></Image>),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell align="right">Rank Tracking</StyledTableCell>
            <StyledTableCell align="right">Geo Ranking</StyledTableCell>
            <StyledTableCell align="right">Citation Monitoring</StyledTableCell>
            <StyledTableCell align="right">Review Generation</StyledTableCell>
            <StyledTableCell align="right">GMB Insights Data</StyledTableCell>
            <StyledTableCell align="right">Google Analystics Data</StyledTableCell>
            <StyledTableCell align="right">Social Integration</StyledTableCell>
            <StyledTableCell align="right">Link Audit/Tracking</StyledTableCell>
            <StyledTableCell align="right">White-label Reporting</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}