export class Commons {
    easify = (arr: any) => {
        const proxy = new Proxy(arr, {
            get(target, name) {
                if (name in target) return Reflect.get(target, name);
                const index = Number(name);
                return Reflect.get(target, target.length + index);
            }
        });
        return proxy;
    }

    shuffle = (arr: any) => {
        for (let i = arr.length; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
        }
        return arr;
    }

    random = (length: number, max: number) => {
        let arr = [];
        for (var i = 0; i < length; ++i) arr[i] = i;
        return this.shuffle(arr);
    }

    remove = (arr: any, key: any) => {
        var index = arr.indexOf(key, 0);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    };

    diff = (arr1: Array<any>, arr2: Array<any>) => {
        var aList = arr1.filter(item => arr2.indexOf(item) < 0);
        var bList = arr2.filter(item => arr1.indexOf(item) < 0);

        var diff = new Set([...aList, ...bList]);
        return Array.from(diff);
    }

    union = (arr1: Array<any>, arr2: Array<any>) => {
        return [...new Set([...arr1, ...arr2])];
    }

    intersection = (arr1: Array<any>, arr2: Array<any>) => {
        return Array.from(new Set([...arr1].filter(x => arr2.indexOf(x) >= 0)));
    }

    removeDuplicates = (arr: Array<any>) => {
        return Array.from(new Set([...arr]));
    }

    compact = (arr: Array<any>) => {
        return arr.filter(item => item);
    }

    flatten = (arr: Array<any>) => {
        let index
        while ((index = arr.findIndex(el => Array.isArray(el))) > -1) {
            arr.splice(index, 1, ...arr[index])
        }
        return arr
    }

    chunk = (arr: Array<any>, at: number) => {
        let arrb = arr.splice(0, at);
        let result = [];
        result.push(arrb);
        result.push(arr);
        return result;
    }

    reverse = (arr: Array<any>) => {
        var result = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            result.push(arr[i]);
        }
        return result;
    }

}
export class Browsers {    
    queryString = (query:string) => {
        var query_string:any = {};
        //var query = window.location.search.substring(1);
        query = query.split('?')[1];
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [ query_string[pair[0]], decodeURIComponent(pair[1]) ];
                query_string[pair[0]] = arr;
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;  
    }
}

export class Strings {    
    random = (length:number,type:string) => {
        var chars;

        switch (type) {
            case 'alphabetical':
                chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                break;
            case 'numerical':
                chars = '0123456789';
                break;
            default:
                chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }

        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];

        //in case starts with 0 we need to remove it.    
        while(type == 'numerical' && result.startsWith("0")){
            result = chars[Math.floor(Math.random() * chars.length)] + result.substring(1,result.length);
        }    

        return result;
    }

    isEmpty = (a:string) => {
    
        if (!a || a.length === 0 || a === "" || typeof a === "undefined" || !/[^\s]/.test(a) || /^\s*$/.test(a)
            || a.replace(/\s/g, "") === "") {
            return true;
        } else {
            return false;
        }
    }

    isString = (a:string) => {
        if (a === undefined || a === null){
            return false;
        }
        return typeof a === 'string' ||  a instanceof String;
    }

    isJsonString = (a:string) => {
        try {
            JSON.parse(a);
        } catch (e) {
            return false;
        }
        return true;
    }

    capitalize = (string = '') => [...string].map((char, index) => index ? char : char.toUpperCase()).join('');

    removeHtmlTags = (a:string) => {
        return a.replace(/(<([^>]+)>)/ig,"");
    }

    isInteger = (a:any) => {
       return !isNaN(parseFloat(a)) && isFinite(a);
    }

    validateEmail = (email:string) => {
        var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(email)) {
            return true;
        }
        return false;
    }

    validateUrl = (value:string) => {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        if(regexp.test(value.toLowerCase())){
            return true;
        }else{
            return false;
        }
    }

    validateImage = (value:string) => {
        var exp = /.*\.(gif)|(jpeg)|(jpg)|(png)$/;
        if(value != ""){
            if(value.toLowerCase().match(exp)){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
        //return false;
    }

    validateUSA_SSN(value:string) {
        value = value.toLowerCase();
        var tmp = false;
        var re = /^([0-6]\d{2}|7[0-6]\d|77[0-2])([ \-]?)(\d{2})\2(\d{4})$/;
        if (!re.test(value)) { tmp = true; }
        var temp = value;
        if (value.indexOf("-") != -1) { temp = (value.split("-")).join(""); }
        if (value.indexOf(" ") != -1) { temp = (value.split(" ")).join(""); }
        if (temp.substring(0, 3) == "000") { tmp = true; }
        if (temp.substring(3, 5) == "00") { tmp = true; }
        if (temp.substring(5, 9) == "0000") { tmp = true; }
     
        if(tmp){
            return false;
        }else
        return true;
    }

    validateDate(dateStr:string, format:string) {
       if (format == null) { format = "MDY"; }
       format = format.toUpperCase();
       if (format.length != 3) { format = "MDY"; }
       if ( (format.indexOf("M") == -1) || (format.indexOf("D") == -1) || (format.indexOf("Y") == -1) ) { format = "MDY"; }
       if (format.substring(0, 1) == "Y") { // If the year is first
          var reg1 = /^\d{2}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
          var reg2 = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
       } else if (format.substring(1, 2) == "Y") { // If the year is second
          var reg1 = /^\d{1,2}(\-|\/|\.)\d{2}\1\d{1,2}$/
          var reg2 = /^\d{1,2}(\-|\/|\.)\d{4}\1\d{1,2}$/
       } else { 
          var reg1 = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{2}$/
          var reg2 = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/
       }
       if ( (reg1.test(dateStr) == false) && (reg2.test(dateStr) == false) ) { return false; }
       var parts = dateStr.split(RegExp.$1); // Split into 3 parts based on what the divider was
       
       if (format.substring(0, 1) == "M") { var mm = parts[0]; } 
       else if (format.substring(1, 2) == "M") { var mm = parts[1]; } else { var mm = parts[2]; }
       if (format.substring(0, 1) == "D") { var dd = parts[0]; } 
       else if (format.substring(1, 2) == "D") { var dd = parts[1]; } else { var dd = parts[2]; }
       if (format.substring(0, 1) == "Y") { var yy = parts[0]; } 
       else if (format.substring(1, 2) == "Y") { var yy = parts[1]; } else { var yy = parts[2]; }
       if (parseFloat(yy) <= 50) { yy = (parseFloat(yy) + 2000).toString(); }
       if (parseFloat(yy) <= 99) { yy = (parseFloat(yy) + 1900).toString(); }
       var dt = new Date(parseFloat(yy), parseFloat(mm)-1, parseFloat(dd), 0, 0, 0, 0);
       if (parseFloat(dd) != dt.getDate()) { return false; }
       if (parseFloat(mm)-1 != dt.getMonth()) { return false; }
       return true;
    }

    formatCurrency = (value:string) => {
        var buf = "";
        var sBuf = "";
        var j = 0;
        value = String(value);
 
        if (value.indexOf(".") > 0) {
            buf = value.substring(0, value.indexOf("."));
        } else {
            buf = value;
        }
        if (buf.length%3!=0&&(buf.length/3-1) > 0) {
            sBuf = buf.substring(0, buf.length%3) + ",";
            buf = buf.substring(buf.length%3);
        }
        j = buf.length;
        for (var i = 0; i <(j/3-1); i++) {
            sBuf = sBuf+buf.substring(0, 3) + ",";
            buf = buf.substring(3);
        }
        sBuf = sBuf+buf;
        if (value.indexOf(".") > 0) {
            value = sBuf + value.substring(value.indexOf("."));}
        else {
            value = sBuf;
        }
        return value;
    }

    guid = () => {
          return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    s4 = () => {
          return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    validateCreditCard = (cardnumber:string,cardtype:string='all') => {
        if (/[^0-9-\s]+/.test(cardnumber)) return false;

        // The Luhn Algorithm. It's so pretty.
        var nCheck = 0, nDigit = 0, bEven = false;
        cardnumber = cardnumber.replace(/\D/g, "");

        for (var n = cardnumber.length - 1; n >= 0; n--) {
            var cDigit = cardnumber.charAt(n),
                nDigit = parseInt(cDigit, 10);

            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }
            nCheck += nDigit;
            bEven = !bEven;
        }
        return (nCheck % 10) == 0;
        
        //TODO replace non numeric characters first from cardnumber

        //American Express    3400 0000 0000 009
        //CARTE BLANCHE    3000 0000 0000 04
        //Discover    6011 0000 0000 0004
        //Diners Club    3852 0000 0232 37
        //enRoute    2014 0000 0000 009
        //JCB    3530 111333300000
        //MasterCard    5500 0000 0000 0004
        //Solo    6334 0000 0000 0004
        //Switch    4903 0100 0000 0009
        //Visa    4111 1111 1111 1111
        //Laser    6304 1000 0000 0008

        // switch (cardtype) {
        //     case 'AMERICAN_EXPRESS':
        //         //TODO
        //         break;
        //     case 'CARTE_BLANCHE':
        //         //TODO
        //         break;    
        //     case 'DISCOVER':    
        //     case 'DINERS_CLUB':    
        //     case 'ENROUTE':    
        //     case 'JCB':   
        //     case 'MASTERCARD':
        //     case 'SOLO':
        //     case 'SWITCH':
        //     case 'VISA':
        //     case 'LASER':

        //     //var regex = new RegExp("^[0-9]{16}$");
        //     //if (!regex.test(cardnumber))

        // }
    }

    isValidCreditCard = (type:string, ccnum:string) => {
        switch (type) {
            case "AmEx":
              // American Express: length 15, prefix 34 or 37.
              var re = /^3[4,7]\d{13}$/;
              break;   
           case "Diners":
              // Diners: length 14, prefix 30, 36, or 38.
              var re = /^3[0,6,8]\d{12}$/;
              break;   
           case 'CARTE_BLANCHE':
                //TODO
                break;    
           case 'DISCOVER':  
               var re = /^6011-?\d{4}-?\d{4}-?\d{4}$/;
               break;      
           case 'DINERS_CLUB':   
               
           case 'ENROUTE':    
           case 'JCB':   
           case 'MASTERCARD':
           // Mastercard: length 16, prefix 51-55, dashes optional.
              var re = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;
              break;   
           case 'SOLO':
           case 'SWITCH':
           case 'VISA':
            var re = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
                break;   
           case 'LASER':   
           default:
               break;   
       }

       if (!re.test(ccnum)) return false;
       // Remove all dashes for the checksum checks to eliminate negative numbers
       ccnum = ccnum.split("-").join("");
       // Checksum ("Mod 10")
       // Add even digits in even length strings or odd digits in odd length strings.
       var checksum = 0;
       for (var i=(2-(ccnum.length % 2)); i<=ccnum.length; i+=2) {
          checksum += parseInt(ccnum.charAt(i-1));
       }
       // Analyze odd digits in even length strings or even digits in odd length strings.
       for (var i=(ccnum.length % 2) + 1; i<ccnum.length; i+=2) {
          var digit = parseInt(ccnum.charAt(i-1)) * 2;
          if (digit < 10) { checksum += digit; } else { checksum += (digit-9); }
       }
       if ((checksum % 10) == 0) return true; else return false;
    }

    validateCitizenId = (id:string,country:string) => {
        switch (country) {
            case "BR":
                if (id = id.replace(/\D/g, ""), !/^\d{11}$/.test(id) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(id)) return !1;
                let cx = 0;
                for (var br = 0; 9 > cx; cx++) 
                    br += (10 - cx) * parseInt(id.charAt(cx), 10);
                if (br = 11 - br % 11, (10 === br || 11 === br) && (br = 0), br + "" !== id.charAt(9)) return !1;
                var d = 0;
               
                let cxx=0
                for (cxx = 0; 10 > cxx; cxx++) 
                    d += (11 - cxx) * parseInt(id.charAt(cxx), 10);
                return d = 11 - d % 11, (10 === d || 11 === d) && (d = 0), d + "" === id.charAt(10)
        
            case "HR":
                return /^[0-9]{11}$/.test(id) ? this.mod11And10(id) : !1
        
            case "IE" :
                if (!/^\d{7}[A-W][AHWTX]?$/.test(id)) return !1;
                let b = function(id:string) {
                    for (; id.length < 7;) id = "0" + id;
                    for (var b = "WABCDEFGHIJKLMNOPQRSTUV", c = 0, d = 0; 7 > d; d++) c += parseInt(id.charAt(d), 10) * (8 - d);
                    return c += 9 * b.indexOf(id.substr(7)), b[c % 23]
                };
                return 9 !== id.length || "A" !== id.charAt(8) && "H" !== id.charAt(8) ? id.charAt(7) === b(id.substr(0, 7)) : id.charAt(7) === b(id.substr(0, 7) + id.substr(8) + "")
        
            case "SM":
                return /^\d{5}$/.test(id)
        
            case "TH":
                if(id.length != 13) return false;
                for(var i=0, sum=0; i < 12; i++)
                    sum += parseFloat(id.charAt(i))*(13-i); 

                if((11-sum%11)%10!=parseFloat(id.charAt(12)))
                    return false; 
                return true;
            
            case "TR":
                if (11 !== id.length) return !1;
                let s = 0;
                let c = 0;
                for (let b = 0; 10 > c; c++) 
                    s += parseInt(id.charAt(c), 10);
                return s % 10 === parseInt(id.charAt(10), 10)
        }

        
    }


    luhn = (a:any) => {
            for (var b = a.length, c = 0, d = [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
                ], e = 0; b--;) e += d[c][parseInt(a.charAt(b), 10)], c ^= 1;
            return e % 10 === 0 && e > 0
        }

     mod11And10 = (a:string) => {
            for (var b = 5, c = a.length, d = 0; c > d; d++) b = (2 * (b || 10) % 11 + parseInt(a.charAt(d), 10)) % 10;
            return 1 === b
    }

    mod37And36 = (a:any, b:any) => {
            b = b || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var c = b.length, d = a.length, e = Math.floor(c / 2), f = 0; d > f; f++) e = (2 * (e || c) % (c + 1) + b.indexOf(a.charAt(f))) % c;
            return 1 === e
    }




    

}


export var ArrayUtils = new Commons();
export var BrowserUtils = new Browsers();
export var StringUtils = new Strings();
