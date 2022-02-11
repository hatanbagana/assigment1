var too = 10, spaces ,stars;

stars = 5;
spaces = too-1;
var str="";
var space;

    for (let i = 1; i < too*2; i++) {
        for (let j = 0; j <= spaces; j++) {
            str = str + ' '
            
        }
        for (j = 1; j < stars*2; j++) {
            str = str + '*'
            
        }
        for (let g = 0; g <= spaces; g++) {
            if (space == 0) {
                str = str + ""
            }else{

                str = str + '  '
            }
        }
        for (h = 1; h < stars*2; h++) {
            str = str + '*'
            
        }
        str = str +  " \n"
        if (i<too) {
            spaces--
            stars++
        }else{
            spaces = spaces + 2
            space = 0
            stars--
        }
    }
    console.log(str);
    