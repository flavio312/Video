import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

const VentasPDF = ({ ventas, filtro }) => {
  const filteredVentas = ventas.filter(venta =>
    venta.producto.toLowerCase().includes(filtro.toLowerCase())
  );

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: 10,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    title: {
      fontSize: 24,
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      marginBottom: 5,
    },
    text: {
      fontSize: 12,
    },
  });

  return (
    <PDFViewer style={{ width: '100%', height: '90vh' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Reporte de Ventas</Text>
            {filteredVentas.map(venta => (
              <View key={venta.id}>
                <Text style={styles.text}>Codigo: {venta.codigo}</Text>
                <Text style={styles.text}>Producto: {venta.producto}</Text>
                <Text style={styles.text}>Precio: {venta.precio}</Text>
                <Text style={styles.text}>Cantidad: {venta.cantidad}</Text>
                <Text style={styles.text}>Subtotal: {venta.subtotal}</Text>
                <Text style={styles.text}>Turno: {venta.turno}</Text>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default VentasPDF;
