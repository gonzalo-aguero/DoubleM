import {StyleSheet} from 'react-native';

export const Colors = {
    darkGreyBG: "#151313",
    darkGreyBG2: "#2B2B2A",
    darkGreyBG3: "#1E1E1C",

    /** @deprecated Use inputBG instead */
    greyInputBG: "#D8D8D8",
    inputBG: "#D8D8D8",
    inputColor: "#252525",
    inputPlaceHolderColor: "#959595",
    
    lightBlue: "#4DC1A7",
    lightBlue2: "#3FECC9",
    
    goodGreen: "#5AC61E",
    warning: "#CDD21B",
    badOrError: "#C61E1E",
    goodGreenBG: "#13AA13",
    warningBG: "yellow",
    badBG: "red",
    
    lightColor: "white",
};

export const Fonts = {
    defaultFont: "normal",
    font1: "normal",//"Quicksand-Light",
    font3: "normal",//"Quicksand-Medium",
    font5: "normal",//"Quicksand-Bold",
}

const Styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    mainContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: Colors.darkGreyBG,
    },
    mainScrollView: {
        width: '100%',
        marginBottom: '15%',
    },
    block: {
        backgroundColor: Colors.darkGreyBG3,
        marginTop: 30,
    },
    block2: {
        backgroundColor: Colors.darkGreyBG3,
    },
    title: {
        fontFamily: Fonts.font3,
        fontSize: 30,
        marginTop: 5,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderColor: Colors.lightColor,
        width: "50%",
        textAlign: 'center',
        color: Colors.lightColor
    },
    title2: {
        fontFamily: Fonts.font3,
        fontSize: 26,
        marginBottom: 5,
        textAlign: 'center',
        color: Colors.lightColor
    },
    title3: {
        fontFamily: Fonts.font3,
        fontSize: 24,
        marginBottom: 5,
        color: Colors.lightColor
    },
    text: {
        fontFamily: Fonts.font1,
        color: Colors.lightColor,
        fontSize: 16
    },
    text2: {
        fontFamily: Fonts.font1,
        color: Colors.lightColor,
        fontSize: 18
    },
    amount: {
        fontFamily: Fonts.font1
    },
    goodText: {
        color: Colors.goodGreen
    },
    warningText: {
        color: Colors.warning,
    },
    badText: {
        color: Colors.badOrError,
    },
    goodBG: {
        backgroundColor: Colors.goodGreenBG,
        color: Colors.lightColor,
    },
    warningBG: {
        backgroundColor: Colors.warningBG,
        color: Colors.lightColor,
    },
    badBG: {
        backgroundColor: Colors.badBG,
        color: Colors.lightColor,
    },
    form: {
        padding: 15,
        margin: 10,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#C4C4C4',
        borderWidth: .3,
    },
    formInput: {
        backgroundColor: Colors.inputBG,
        color: Colors.inputColor,
        padding: 4,
        marginVertical: 7,
        borderRadius: 3
    },
    formInputPlaceHolder: {
        color: Colors.inputPlaceHolderColor
    },  
    formSubmitButton: {
        color: Colors.lightColor,
        marginVertical: 7,
        borderRadius: 3
    },
    formSubmitButtonText: {
        color: Colors.lightColor,
        padding: 8,
        fontSize: 17,
        textAlign: 'center',
    },
    actionBar: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:'100%',
        backgroundColor: Colors.darkGreyBG2,
        padding: 10,
    },
    button: {
        fontSize: 16,
        padding: 7,
        borderRadius: 3,
        textAlign:'center',
    },
    disableButton: {
        opacity: 0.5,
    }
});
export default Styles;

export function createTableStyles(columns = null, height = '25%'){
    let columnWidth;
    if(columns !== null){
        columnWidth = (100 / columns) + '%';
    }else{
        columnWidth = 'auto';
    }

    const tableStyles = StyleSheet.create({
        table: {
            width: '100%',
            height: height,
            maxHeight: height,
        },
        tableRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
            padding: 4,
            paddingHorizontal: 15,
        },
        tableHeadCell: {
            fontFamily: Fonts.font5,
            color: Colors.lightColor,
            fontSize: 18,
            width: columnWidth,
            textAlign: 'center',
        },
        tableCell: {
            fontFamily: Fonts.font1,
            color: Colors.lightColor,
            fontSize: 16,
            width: columnWidth,
            textAlign: 'center',
        },
        selectedItem: {
            backgroundColor: 'grey',
        }
    });

    return tableStyles;
}

export const pickerSelectStyles = StyleSheet.create({
    container: {
        paddingVertical: 0,
        paddingHorizontal: 0,
        backgroundColor: Colors.inputBG,
    },
    inputIOS: {
        paddingVertical: 0,
        paddingHorizontal: 0,
        backgroundColor: Colors.inputBG,
        borderWidth: 0.5,
        borderColor: 'white',
    },
    inputAndroid: {
        paddingVertical: 0,
        paddingHorizontal: 0,
        backgroundColor: Colors.inputBG,
        borderWidth: 0.5,
        borderColor: 'white',
    },
});