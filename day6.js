data = `2,1,2,1,5,1,5,1,2,2,1,1,5,1,4,4,4,3,1,2,2,3,4,1,1,5,1,1,4,2,5,5,5,1,1,4,5,4,1,1,4,2,1,4,1,2,2,5,1,1,5,1,1,3,4,4,1,2,3,1,5,5,4,1,4,1,2,1,5,1,1,1,3,4,1,1,5,1,5,1,1,5,1,1,4,3,2,4,1,4,1,5,3,3,1,5,1,3,1,1,4,1,4,5,2,3,1,1,1,1,3,1,2,1,5,1,1,5,1,1,1,1,4,1,4,3,1,5,1,1,5,4,4,2,1,4,5,1,1,3,3,1,1,4,2,5,5,2,4,1,4,5,4,5,3,1,4,1,5,2,4,5,3,1,3,2,4,5,4,4,1,5,1,5,1,2,2,1,4,1,1,4,2,2,2,4,1,1,5,3,1,1,5,4,4,1,5,1,3,1,3,2,2,1,1,4,1,4,1,2,2,1,1,3,5,1,2,1,3,1,4,5,1,3,4,1,1,1,1,4,3,3,4,5,1,1,1,1,1,2,4,5,3,4,2,1,1,1,3,3,1,4,1,1,4,2,1,5,1,1,2,3,4,2,5,1,1,1,5,1,1,4,1,2,4,1,1,2,4,3,4,2,3,1,1,2,1,5,4,2,3,5,1,2,3,1,2,2,1,4`;

dataArray = data.split(",").map(Number);

//fishArray = Array.from(Array(9)).map(x => []);
fishArray = new Array(9).fill(0);

dataArray.map(x => {
    fishArray[x]++;
});

for (let i = 1; i < 257; i++) {
    handleOneDay();
    //console.log(i);  
}

function handleOneDay()
{
    let removedFishArray = parseInt(fishArray.splice(0,1));
    fishArray[6] = Number(removedFishArray)+Number(fishArray[6]);
    fishArray.push(removedFishArray);
    
    //console.log(fishArray);
    /*fishArray.map((x, index) => {
        
        if(index > 0)
            newArray[index-1] = copyArray[index];
        else if(index ==0)
        {
            newArray[6] = copyArray[index];
            newArray[8] = copyArray[0];
        } 
    });*/
    //fishArray = newArray;
    /*dataArray.map((x,index) => {
        //
        if(x > 0)
            dataArray[index]--;
        else if(x == 0)
        {
            dataArray[index] = 6
            dataArray.push(8);
        }
    });*/
}

console.log(fishArray.length);
var count = 0;
fishArray.map(x => {
count+=x;
});
console.log(count);