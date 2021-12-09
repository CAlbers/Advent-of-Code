testData = `2199943210
3987894921
9856789892
8767896789
9899965678`;


singleLine = testData.split("\n");
data2D = Array.from(Array(singleLine.length)).map(x => []);
singleLine.map((x, i) => {
    x.split("").map((y, j) => {
        data2D[i][j] = y;
    });
});

data2D.map((x, i) => {
    x.map((y, j) => {
        if(i===0){
        if (y < data2D[i - 1][j] && y < data2D[i + 1][j])
        }
        //Check all numbers but check if on border first 
        if (i - 1 > 0)
            if (i + 1 < data2D.length)
                //normal horizontal check
        else if(i + 1 < data2D.length)
        {
            
        }
        else{
//normal check
        }
            //only check right side
            if (i + 1 < data2D.length)

                if (i - 1 > 0 && i + 1 < data2D.length && ) {
                    if (i - 1 > 0)
                        if (y < x[j - 1] &&
                            y < x[j + 1]) {//Horizontal low


                            j - 1 > 0 && j + 1 < x.length
                            if (y < data2D[i - 1][j] && y < data2D[i + 1][j])
                                console.log("Lowest");
                        }
                }
    });

    //if(x < singleLine[index] && x < singleLine[index]+1)
    //if(x <)
});

function checkHorizontal() {

}