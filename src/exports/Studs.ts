// I don't understand how to turn a 20 ft wall into 2 sections for two different equations..
// or other ways.

// Would this work? (24 foot wall)
// 24 x 12(inches) = 288
// -5 ( for the outside beam + 2x4)
// = 283 / 96 (one full length board)
// = 2.94...
// = 2 full length boards and then the remaining 8 foot wall
// so the 2 = two full length board
// the .924 = the remaining short side


const twobyfouradd = 1.5 * 2
const fourbyfouradd = 3.5 * 2
const oneboardinches = 96
const Studspacing = 16

// Walltoinches takes the width or the length and multiplies by 12 to convert to inches
// Each wall has two beams and 2 boards(Geralds request, will be removed)
function Walltoinches (wallinfeet:number){
    let deductions = wallinfeet * 12
        if ((deductions >=0) && (deductions <=239)) //0 to 19.9 feet ( in inches)
        return deductions - 10

        else if ((deductions >=240) && (deductions <=479)) // 20 to 39.9 feet
        return deductions - 13.5

        else if ((deductions >=480) && (deductions <=719)) // 40 to 59.9 feet
        return deductions - 17
        
        else ((deductions >=720) && (deductions <=959)) // 60 to 79.9 feet
        return deductions - 20.5
}   

// account for top and bottom
// To be used when total length is input5
function boardsBottomTop (Bottomandtop:number){
    let totalboards = Math.ceil (Bottomandtop / oneboardinches * 2);
    return totalboards
}

// Calculates the amount of studs per wall
// Length divided by 16 when called
// currently adds 1 extra stud (1 per wall ) on 24ft wall because it's not split into two different sections
// 24x16 should be 91(10% waste) but is 93..
function WallStuds (lengthininches:number){
    let numberofstuds = lengthininches / 16 
    return numberofstuds
}

//Builds the house
function Wallsbuilt (number:number){
    let oneWallinches = Walltoinches(number) // oneWallinches is the wall in inches(calls the Walltoinches function)
    let onewallstuds = Math.floor (WallStuds (oneWallinches)) // Takes the wall length in inches and divides by 16 ( rounded down )
    let onewallTBS = boardsBottomTop(oneWallinches) + 2 // Calculates amount of boards for top and bottom and adds two for side boards
    let twowalltotal = (onewallstuds + onewallTBS) * 2 
return twowalltotal
}

// Builds the house..
export function Housebuilt (length:number, width:number ){
    let twowidthwalls = Wallsbuilt(length) 
    let twolengthwalls = Wallsbuilt(width)
    return twolengthwalls + twowidthwalls
}

