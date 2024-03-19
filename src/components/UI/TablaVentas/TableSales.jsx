import React from 'react';
import SalesRow from '../SalesRow/SalesRow';
import "./TableSales.css"

function SalesTable({ sales, onDelete }) {
    return (
        <table className="sales-table">
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre del producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {sales.map(sale => (
                    <SalesRow 
                        key={sale.id} 
                        sale={sale} 
                        onDelete={onDelete} 
                    />
                ))}
            </tbody>
        </table>
    );
}

export default SalesTable;
