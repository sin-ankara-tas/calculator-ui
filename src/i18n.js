import i18next from "i18next";
import {initReactI18next} from "react-i18next"

i18next.use(initReactI18next).init({
    resources: {
        en : {
            translations:{
                "PrimaryNumber" : "Primary Number : ",
                "SecondaryNumber" : "Secondary Number : ",
                "Calculator" : "Calculator",
                "Result" : "Result : ",
                "Addition" : "Addition",
                "Subtraction" :  "Subtraction",
                "Multiplication" :  "Multiplication",
                "Division" : "Division",
                "Calculate" : "Calculate",
                "CalculationType" : "Calculation Type",
                "ResultValue" : "Result Value",
                "ResultMessage" : "Result Message"
            }
        },
        tr : {
            translations:{
                "PrimaryNumber" : "Birinci Sayı : ",
                "SecondaryNumber" : "İkinci Sayı : ",
                "Calculator" : "Hesap Makinesi",
                "Result" : "Sonuç : ",
                "Addition" : "Topla",
                "Subtraction" :  "Çıkar",
                "Multiplication" :  "Çarp",
                "Division" : "Böl",
                "Calculate" : "Hesapla",
                "CalculationType" : "Hesaplama Tipi",
                "ResultValue" : "Sonuç",
                "ResultMessage" : "Mesaj"
            }
        }
    },
    fallbackLng: 'tr',
    ns: ['translations'],
    defaultNS:'translations',
    keySeparator: false,
    interpolation: {
        escapeValue:false,
        formatSeparator:','
    },
    react :{
        wait:true
    }
});

export default i18next;