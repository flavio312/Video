import React from 'react';
import ProductTable from '../ProductTable/ProductTable';
import "./ConsultProduct.css"

function ConsultProduct() {
    const products = [
        { id: 1, codigo: '001', nombre: 'Producto 1', stock: 10, precioCompra: 50, precioVenta: 100, seccion: 'A' },
        { id: 2, codigo: '002', nombre: 'Producto 2', stock: 20, precioCompra: 60, precioVenta: 120, seccion: 'B' },
        { id: 3, codigo: '003', nombre: 'Producto 3', stock: 30, precioCompra: 70, precioVenta: 140, seccion: 'C' },
    ];

    const handleUpdate = (productId) => {
        // Implementación de la lógica de actualización
    };

    const handleDelete = (productId) => {
        // Implementación de la lógica de eliminación
    };

    return (
        <ProductTable 
            products={products} 
            onUpdate={handleUpdate} 
            onDelete={handleDelete} 
        />
    );
}

export default ConsultProduct;
