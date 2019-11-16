module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        // Inputs
        evenOdd: '[name="evenOddInput"]',
        objFilter: '[name="objectFilterInput"]',
        nameFilter: '#nameFilterInput',
        paladinInput: '[name="palindromeInput"]',
        oneSum: '[name="sumInput1"]',
        twoSum: '[name="sumInput2"]',

        //Buttons
        evenOddBtn: '[name="evenOddButton"]',
        objBtn: '[name="objectFilterButton"]',
        nameBtn: '#nameFilterButton',
        paladinBtn: '[name="palindromeButton"]',
        sumBtn: '[name="sumButton"]',

        // Verify Fields
        page: '.sumPB',
        vEven: '[name="evenResults"]',
        vOdd: '[name="oddResults"]',
        vObj: '[name="objectFilterResults"]',
        vName: '[name="nameFilterResults"]',
        vPaladin: '[name="palindromeResults"]',
        vSum: '[name="sumResults"]',
    }
}