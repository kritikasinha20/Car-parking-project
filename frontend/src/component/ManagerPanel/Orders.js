import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2023',
    'Manvi Singh',
    'Mp Nagar, Bhopal',
    '5:20 Pm - 7:20 Pm',
    30,
  ),
  createData(
    1,
    '17 Mar, 2023',
    'Ajay verma',
    'New market,Bhopal',
    '11:20 am - 2:pm',
    85,
  ),
  createData(2, '1 April, 2023', 'Tom ben', 'Vijay nagar, Bhopal', '8:00 Am -9:00 Am', 100.81),
  createData(
    3,
    '3 april,2023',
    'Michael Jackson',
    'Gary, IN',
    '1:00 pm -2:00 pm',
    659,
  ),
  createData(
    4,
    '5 April, 2023',
    'Bruce Springsteen',
    'Raisen',
    '9:00am -10:00 am',
    212,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Bookings</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Area</TableCell>
            <TableCell>Time</TableCell>
            <TableCell align="right"> Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`Rs ${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}