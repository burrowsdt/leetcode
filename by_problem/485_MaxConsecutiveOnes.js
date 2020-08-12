// Max Consecutive Ones
// Using switch statement - 68ms, beats 98.49% for runtime distribution;

var findMaxConsecutiveOnes = function(nums) {
    var highest = 0;
    var current = 0;
    
    for (i = 0; i <= nums.length - 1; i++) {
        switch(nums[i]){
            case 0:
                current = 0;
                break;
            case 1:
                current += 1;
                if (current > highest) {
                    highest = current;
                }
                break;
    }
    };
    return highest;  
};