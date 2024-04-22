import Table from 'react-bootstrap/Table';
import React from 'react';

function Pricelist() {
  return (
    <Table striped bordered hover variant="light green" style={{ backgroundColor: '#d4edda' }}>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Tool Name</th>
          <th>Min Price/hr</th>
          <th>Max Price/hr</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Tractor</td>
          <td>1200</td>
          <td>1400</td>
        </tr>
        <tr>
          <td>2</td>
          <td>harvester</td>
          <td>1500</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Tractor</td>
          <td>1500</td>
          <td>2800</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Hay collection</td>
          <td>1200</td>
          <td>1800</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Cultivator</td>
          <td>1100</td>
          <td>2200</td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default Pricelist;