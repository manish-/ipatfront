export const render_inner_html = (htmlData) => {
    return {
        __html: `${htmlData}`
    }
}

export const ucwords = value => {
    if (!value) {
        return '';
    }
    value = value.replace(/_/g, ' ');
    let strArr = value.split(" ");
    let total = strArr.length;
    for (let i = 0; i < total; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    // //console.log("strArr.toString()", strArr.toString().replace(/,/g, ' '));
    return strArr.toString().replace(/,/g, ' ');
}

export const convertingCurrencyNumbers = (value) => {
    //value = 2000;
    let no = Math.floor(value);

    // let point = Math.round(value - no, 2) * 100;
    let hundred = null;
    let digits_1 = no.toString().length;
    let i = 0;
    let str = [];

    let words = { '0': '', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four', '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine', '10': 'Ten', '11': 'Eleven', '12': 'Twelve', '13': 'Thirteen', '14': 'Fourteen', '15': 'Fifteen', '16': 'Sixteen', '17': 'Seventeen', '18': 'Eighteen', '19': 'Nineteen', '20': 'Twenty', '30': 'Thirty', '40': 'Forty', '50': 'Fifty', '60': 'Sixty', '70': 'Seventy', '80': 'Eighty', '90': 'Ninety' };
    let digits = ['', 'Hundred', 'Thousand', 'Lakh', 'Crore'];
    let j = 0;
    while (i < digits_1) {
        let divider = (i === 2) ? 10 : 100;
        value = Math.floor(no % divider);
        no = Math.floor(no / divider);
        i += (divider === 10) ? 1 : 2;
        if (value) {
            let counter = str.length;
            let plural = (counter && value > 9) ? 's' : '';
            hundred = (counter === 1 && str[0]) ? ' and ' : '';
            str[j] = (value < 21) ? (words[value] + " " + digits[counter] + plural + " " + hundred) : (words[Math.floor(value / 10) * 10] + " " + words[value % 10] + " " + digits[counter] + plural + " " + hundred);
        } else str[j] = '';

        j++;
    }
    // //console.log("str", str);
    str = str.reverse();
    let result = str.toString();
    result = result.replace("  ", " ");
    result = result.replace(" ,", " ");
    // result = ucwords(result);    
    return result + " Only";
}

export const formatAMPM = (value) => {

    let timeArray = value.split(":");

    var hours = timeArray[0];
    var minutes = timeArray[1];

    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

export const titleToSlug = (value) => {
    return value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}
export const slugToTitle = (value) => {
    return value.toLowerCase().replace(/-/g, ' ');//.replace(/[^\w ]+/g, '');
}
