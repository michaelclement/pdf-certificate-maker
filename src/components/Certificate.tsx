import { useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  document: {
    height: '100%',
  },
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

export default function Certificate() {
  const [orientation, setOrientation] = useState('landscape');

  return (
    <PDFViewer>
      <Document>
        <Page size='A4' orientation='landscape' style={styles.page}>
          <View style={styles.section}>
            <Text>Section #A</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
