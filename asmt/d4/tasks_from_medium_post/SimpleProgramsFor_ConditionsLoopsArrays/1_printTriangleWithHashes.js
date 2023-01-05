/**
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

 */

let str = '#';
let rows = 7;

for(i=0; i < rows; ++i){
    console.log(str);
    str += '#';
}


// #
// ##
// ###
// ####
// #####
// ######
// #######