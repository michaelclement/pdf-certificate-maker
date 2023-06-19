import { useEffect, useState } from 'react';

import { Font, Page, Text, Image, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

export default function Certificate(props: any) {
  Font.register({
    family: 'Bebas Neue',
    src: 'https://fonts.gstatic.com/s/bebasneue/v10/JTUSjIg69CK48gW7PXooxW4.ttf',
  })

  Font.register({
    family: 'Merriweather',
    src: 'https://fonts.gstatic.com/s/merriweather/v30/u-440qyriQwlOrhSvowK_l5Oew.ttf',
  })

  Font.register({
    family: 'Roboto',
    src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf',
  })

  const [styles, setStyles] = useState(StyleSheet.create({
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
      height: '100%',
      marginHorizontal: 'auto',
      textAlign: "center",
      justifyContent: 'center',
      objectFit: 'cover',
      objectPosition: 'center'
    },
    nameText: {
      position: "absolute",
      top: props.tops[0] + '%',
      width: "100%",
      height: "0px",
      color: "black",
      fontSize: "30px",
      textAlign: "center",
      fontFamily: props.font,
    },
    subtitleText: {
      position: "absolute",
      top: props.tops[1] + '%',
      width: "100%",
      height: "0px",
      color: "black",
      fontSize: "30px",
      textAlign: "center",
      fontFamily: props.font,
    },
  }));

  return (
    <div className='w-5/6 h-5/6 mx-auto'>
      <PDFViewer>
        <Document>
          {props.dataSource.length > 0 ?
            props.dataSource.map((row: any) => {
              if (Object.keys(row).length != 0) {
                return <Page key={`${row}`} size='A4' orientation='landscape' style={styles.page}>
                  <View style={styles.parent}>
                    <Image style={styles.bgImg} src={props.bg} />
                    <Text style={styles.nameText}>{row['Name']}</Text>
                    <Text style={styles.subtitleText}>{row['Subtitle']}</Text>
                  </View>
                </Page>
              }
            }) : <></>}
        </Document>
      </PDFViewer>
    </div>
  );
}
