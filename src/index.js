module.exports = function getZerosCount(number, base) {
  // your implementation
  var  brr=[], crr=[];
  for (let i=2; base!==1; i++) {
    if (base%i===0) {
      brr.push(i);
      base/=i;
      i--;
    }
  }
  
  for (let i=0, j=0, counter=1; brr.length!==i; ) {
    crr[j]=counter;
    if (brr[i]===brr[i+1]) {
      counter++;
      brr.splice(i+1,1);
    } else { 
      i++;
      j++;
      counter=1;
    }
  }
  
  var arr = new Array(brr.length);
  for (let i=0; i<arr.length; i++) {
    arr[i]=0;

  }
  
  for (let  j=0, counter=0, value=number; j<brr.length; ) {
    if (brr[j]<=value) {
      value=~~(value/=brr[j]);
      counter+=value;
    } else {
      arr[j]=counter;
      value=number;
      j++;
      counter=0;
    }
  }
  
  for (var i=0, min=arr[i], mincrr=crr[i], a=i; i<arr.length-1; i++ ) {
    if (arr[i+1]/crr[i+1]<min/mincrr  ) {
      min=arr[i+1];
      mincrr=crr[i+1];
      a=i+1;
    }
  }


  return Math.floor(arr[a]/crr[a]);
}