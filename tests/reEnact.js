var enact = {}
module.exports = {
    beforeEach: browser => {
        enact = browser.page.reEnactPage();
        enact
            .navigate();
    },
    after: browser => {
        browser
            .end();
    },
    'Even Number': browser => {
        enact
            .verify.visible('@page')
            .setValue('@evenOdd', '64')
            .click('@evenOddBtn')
            .verify.containsText('@vEven', '64');
    },
    'Odd Number': browser => {
        enact
            .verify.visible('@page')
            .setValue('@evenOdd', '255')
            .click('@evenOddBtn')
            .verify.containsText('@vOdd', '255');
    },
    'Object Filter': browser => {
        enact
            .verify.visible('@page')
            .setValue('@objFilter', 'hairColor')
            .click('@objBtn')
            .verify.containsText('@vObj', 'hairColor');
    },
    'Name Filter': browser => {
        enact
            .verify.visible('@page')
            .setValue('@nameFilter', 'Jennifer')
            .click('@nameBtn')
            .verify.containsText('@vName', 'Jennifer');
    },
    'Palindrome - True': browser => {
        enact
            .verify.visible('@page')
            .setValue('@paladinInput', 'a = a')
            .click('@paladinBtn')
            .verify.containsText('@vPaladin', 'true');
    },
    'Palindrome - False': browser => {
        enact
            .verify.visible('@page')
            .setValue('@paladinInput', 'a = b')
            .click('@paladinBtn')
            .verify.containsText('@vPaladin', 'false');
    },
    'Addition': browser => {
        enact
            .verify.visible('@page')
            .setValue('@oneSum', '123')
            .setValue('@twoSum', '132')
            .click('@sumBtn')
            .verify.containsText('@vSum', '255');
    },

    // 'Object Filter': browser => {
    //     var objection = ["name", "hairColor", "age", "title"];
    //     for (var x = 0; x < objection.length; x++) {
    //         enact
    //             .verify.visible('@page')
    //             .setValue({ selector: '@objFilter', input: objection[x] })
    //             .click('@objBtn')
    //             .verify.containsText('@vObj', objection[x])
    //             .clearValue('@objFilter')
    //     }
    // },
    // 'Name Filter': browser => {
    //     var name = ["James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy"];
    //     for (var x = 0; x < name.length; x++) {
    //         enact
    //             .verify.visible('@page')
    //             .setValue({ selector: '@nameFilter', input: name[x] })
    //             .click('@nameBtn')
    //             .verify.containsText('@vName', name[x])
    //             .clearValue('@nameFilter')
    //     }
    // },
}