import { useEffect, useState } from 'react';

import { Page, Text, Image, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  document: {
    height: '100%',
  },
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  parent: {
    flexGrow: 1,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  bgImg: {
    position: "absolute",
    left: '0px',
    right: '0px',
    marginHorizontal: 'auto',
    textAlign: "center",
    justifyContent: 'center',
  },
  nameText: {
    position: "absolute",
    top: "35%",
    width: "100%",
    height: "75px",
    color: "black",
    textAlign: "center",
    paddingTop: "25px",
  },
  dateText: {
    position: "absolute",
    top: "55%",
    width: "100%",
    height: "75px",
    color: "black",
    textAlign: "center",
    paddingTop: "25px",
  },
});

export default function Certificate(props: any) {

  useEffect(() => {
    console.log("Datasource: ", props.dataSource);
  }, [props.dataSource]);

  return (
    <div className='w-5/6 h-5/6 mx-auto'>
      <PDFViewer>
        <Document>
          <Page size='A4' orientation='landscape' style={styles.page}>
            <View style={styles.parent}>
              <Image style={styles.bgImg} src={props.bg} />
              <Text style={styles.nameText}>Name Here</Text>
              <Text style={styles.dateText}>Date Here</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}
