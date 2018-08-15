export class ValidationsUtils {

    // validateEmail = (email: string) => {
    //     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //     if (filter.test(email)) {
    //         return true;
    //     }
    //     return false;
    // };
    //
    // validateUrl = (value: string) => {
    //     var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    //     if (regexp.test(value.toLowerCase())) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // };
    //
    // validateImage = (value: string) => {
    //     var exp = /.*\.(gif)|(jpeg)|(jpg)|(png)$/;
    //     if (value != "") {
    //         if (value.toLowerCase().match(exp)) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     } else {
    //         return true;
    //     }
    //     //return false;
    // };
    //
    // validateUSA_SSN(value: string) {
    //     value = value.toLowerCase();
    //     var tmp = false;
    //     var re = /^([0-6]\d{2}|7[0-6]\d|77[0-2])([ \-]?)(\d{2})\2(\d{4})$/;
    //     if (!re.test(value)) {
    //         tmp = true;
    //     }
    //     var temp = value;
    //     if (value.indexOf("-") != -1) {
    //         temp = (value.split("-")).join("");
    //     }
    //     if (value.indexOf(" ") != -1) {
    //         temp = (value.split(" ")).join("");
    //     }
    //     if (temp.substring(0, 3) == "000") {
    //         tmp = true;
    //     }
    //     if (temp.substring(3, 5) == "00") {
    //         tmp = true;
    //     }
    //     if (temp.substring(5, 9) == "0000") {
    //         tmp = true;
    //     }
    //
    //     if (tmp) {
    //         return false;
    //     } else
    //         return true;
    // }
    //
    // validateDate(dateStr: string, format: string) {
    //     if (format == null) {
    //         format = "MDY";
    //     }
    //     format = format.toUpperCase();
    //     if (format.length != 3) {
    //         format = "MDY";
    //     }
    //     if ((format.indexOf("M") == -1) || (format.indexOf("D") == -1) || (format.indexOf("Y") == -1)) {
    //         format = "MDY";
    //     }
    //     if (format.substring(0, 1) == "Y") { // If the year is first
    //         var reg1 = /^\d{2}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
    //         var reg2 = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
    //     } else if (format.substring(1, 2) == "Y") { // If the year is second
    //         var reg1 = /^\d{1,2}(\-|\/|\.)\d{2}\1\d{1,2}$/
    //         var reg2 = /^\d{1,2}(\-|\/|\.)\d{4}\1\d{1,2}$/
    //     } else {
    //         var reg1 = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{2}$/
    //         var reg2 = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/
    //     }
    //     if ((reg1.test(dateStr) == false) && (reg2.test(dateStr) == false)) {
    //         return false;
    //     }
    //     var parts = dateStr.split(RegExp.$1); // Split into 3 parts based on what the divider was
    //
    //     if (format.substring(0, 1) == "M") {
    //         var mm = parts[0];
    //     }
    //     else if (format.substring(1, 2) == "M") {
    //         var mm = parts[1];
    //     } else {
    //         var mm = parts[2];
    //     }
    //     if (format.substring(0, 1) == "D") {
    //         var dd = parts[0];
    //     }
    //     else if (format.substring(1, 2) == "D") {
    //         var dd = parts[1];
    //     } else {
    //         var dd = parts[2];
    //     }
    //     if (format.substring(0, 1) == "Y") {
    //         var yy = parts[0];
    //     }
    //     else if (format.substring(1, 2) == "Y") {
    //         var yy = parts[1];
    //     } else {
    //         var yy = parts[2];
    //     }
    //     if (parseFloat(yy) <= 50) {
    //         yy = (parseFloat(yy) + 2000).toString();
    //     }
    //     if (parseFloat(yy) <= 99) {
    //         yy = (parseFloat(yy) + 1900).toString();
    //     }
    //     var dt = new Date(parseFloat(yy), parseFloat(mm) - 1, parseFloat(dd), 0, 0, 0, 0);
    //     if (parseFloat(dd) != dt.getDate()) {
    //         return false;
    //     }
    //     if (parseFloat(mm) - 1 != dt.getMonth()) {
    //         return false;
    //     }
    //     return true;
    // }
    //
    // validateCreditCard = (cardnumber: string, cardtype: string = 'all') => {
    //     if (/[^0-9-\s]+/.test(cardnumber)) return false;
    //
    //     // The Luhn Algorithm. It's so pretty.
    //     var nCheck = 0, nDigit = 0, bEven = false;
    //     cardnumber = cardnumber.replace(/\D/g, "");
    //
    //     for (var n = cardnumber.length - 1; n >= 0; n--) {
    //         var cDigit = cardnumber.charAt(n),
    //             nDigit = parseInt(cDigit, 10);
    //
    //         if (bEven) {
    //             if ((nDigit *= 2) > 9) nDigit -= 9;
    //         }
    //         nCheck += nDigit;
    //         bEven = !bEven;
    //     }
    //     return (nCheck % 10) == 0;
    // };
    //
    // isValidCreditCard = (type: string, ccnum: string) => {
    //     switch (type) {
    //         case "AmEx":
    //             // American Express: length 15, prefix 34 or 37.
    //             var re = /^3[4,7]\d{13}$/;
    //             break;
    //         case "Diners":
    //             // Diners: length 14, prefix 30, 36, or 38.
    //             var re = /^3[0,6,8]\d{12}$/;
    //             break;
    //         case 'CARTE_BLANCHE':
    //             //TODO
    //             break;
    //         case 'DISCOVER':
    //             var re = /^6011-?\d{4}-?\d{4}-?\d{4}$/;
    //             break;
    //         case 'DINERS_CLUB':
    //
    //         case 'ENROUTE':
    //         case 'JCB':
    //         case 'MASTERCARD':
    //             // Mastercard: length 16, prefix 51-55, dashes optional.
    //             var re = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;
    //             break;
    //         case 'SOLO':
    //         case 'SWITCH':
    //         case 'VISA':
    //             var re = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
    //             break;
    //         case 'LASER':
    //         default:
    //             break;
    //     }
    //
    //     if (!re.test(ccnum)) return false;
    //     // Remove all dashes for the checksum checks to eliminate negative numbers
    //     ccnum = ccnum.split("-").join("");
    //     // Checksum ("Mod 10")
    //     // Add even digits in even length strings or odd digits in odd length strings.
    //     var checksum = 0;
    //     for (var i = (2 - (ccnum.length % 2)); i <= ccnum.length; i += 2) {
    //         checksum += parseInt(ccnum.charAt(i - 1));
    //     }
    //     // Analyze odd digits in even length strings or even digits in odd length strings.
    //     for (var i = (ccnum.length % 2) + 1; i < ccnum.length; i += 2) {
    //         var digit = parseInt(ccnum.charAt(i - 1)) * 2;
    //         if (digit < 10) {
    //             checksum += digit;
    //         } else {
    //             checksum += (digit - 9);
    //         }
    //     }
    //     if ((checksum % 10) == 0) return true; else return false;
    // };
    //
    // validateCitizenId = (id: string, country: string) => {
    //
    //     function mod11And10(a: string) {
    //         for (var b = 5, c = a.length, d = 0; c > d; d++) b = (2 * (b || 10) % 11 + parseInt(a.charAt(d), 10)) % 10;
    //         return 1 === b
    //     };
    //
    //     function luhn(a: any) {
    //         for (var b = a.length, c = 0, d = [
    //             [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    //             [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
    //         ], e = 0; b--;) e += d[c][parseInt(a.charAt(b), 10)], c ^= 1;
    //         return e % 10 === 0 && e > 0
    //     };
    //
    //     function mod37And36(a: any, b: any) {
    //         b = b || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //         for (var c = b.length, d = a.length, e = Math.floor(c / 2), f = 0; d > f; f++) e = (2 * (e || c) % (c + 1) + b.indexOf(a.charAt(f))) % c;
    //         return 1 === e
    //     }
    //
    //     switch (country) {
    //         case "BR":
    //             if (id = id.replace(/\D/g, ""), !/^\d{11}$/.test(id) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(id)) return !1;
    //             let cx = 0;
    //             for (var br = 0; 9 > cx; cx++)
    //                 br += (10 - cx) * parseInt(id.charAt(cx), 10);
    //             if (br = 11 - br % 11, (10 === br || 11 === br) && (br = 0), br + "" !== id.charAt(9)) return !1;
    //             var d = 0;
    //
    //             let cxx = 0
    //             for (cxx = 0; 10 > cxx; cxx++)
    //                 d += (11 - cxx) * parseInt(id.charAt(cxx), 10);
    //             return d = 11 - d % 11, (10 === d || 11 === d) && (d = 0), d + "" === id.charAt(10)
    //
    //         case "HR":
    //             return /^[0-9]{11}$/.test(id) ? mod11And10(id) : !1
    //
    //         case "IE" :
    //             if (!/^\d{7}[A-W][AHWTX]?$/.test(id)) return !1;
    //             let b = function (id: string) {
    //                 for (; id.length < 7;) id = "0" + id;
    //                 for (var b = "WABCDEFGHIJKLMNOPQRSTUV", c = 0, d = 0; 7 > d; d++) c += parseInt(id.charAt(d), 10) * (8 - d);
    //                 return c += 9 * b.indexOf(id.substr(7)), b[c % 23]
    //             };
    //             return 9 !== id.length || "A" !== id.charAt(8) && "H" !== id.charAt(8) ? id.charAt(7) === b(id.substr(0, 7)) : id.charAt(7) === b(id.substr(0, 7) + id.substr(8) + "")
    //
    //         case "SM":
    //             return /^\d{5}$/.test(id)
    //
    //         case "TH":
    //             if (id.length != 13) return false;
    //             for (var i = 0, sum = 0; i < 12; i++)
    //                 sum += parseFloat(id.charAt(i)) * (13 - i);
    //
    //             if ((11 - sum % 11) % 10 != parseFloat(id.charAt(12)))
    //                 return false;
    //             return true;
    //
    //         case "TR":
    //             if (11 !== id.length) return !1;
    //             let s = 0;
    //             let c = 0;
    //             for (let b = 0; 10 > c; c++)
    //                 s += parseInt(id.charAt(c), 10);
    //             return s % 10 === parseInt(id.charAt(10), 10)
    //     }
    // };

}