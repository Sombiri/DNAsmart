export function calculateNumOfErrors(eCode, dCode) {
    const UP   = 0;
    const LEFT = 1;
    const UL   = 2;
  
    const gap =   -5;
    const match =   0;
    const mismatch =  -1;
    let mat   = {};
    let main_matrix = {};
  
    // initialization
    for(let i=0; i<eCode.length+1; i++) {
      mat[i] = {0:0};
      main_matrix[i] = {0:[]};
      for(let j=1; j<dCode.length+1; j++) {
        mat[i][j] = (i === 0) 
          ? 0
          : (eCode.charAt(i-1) === dCode.charAt(j-1)) ? match : mismatch
        main_matrix[i][j] = [];
      }
    }
  
    // calculate each value
    for(let i=0; i<eCode.length+1; i++) {
      for(let j=0; j<dCode.length+1; j++) {
        let newval = (i === 0 || j === 0)
            ? gap * (i + j)
            : Math.max(mat[i-1][j] + gap, mat[i-1][j-1] + mat[i][j], mat[i][j-1] + gap);
  
        if (i > 0 && j > 0) {
          if( newval === mat[i-1][j] + gap) main_matrix[i][j].push(UP);
          if( newval === mat[i][j-1] + gap) main_matrix[i][j].push(LEFT);
          if( newval === mat[i-1][j-1] + mat[i][j]) main_matrix[i][j].push(UL);
        }
        else {
          main_matrix[i][j].push((j === 0) ? UP : LEFT);
        }
        mat[i][j] = newval;
      }
    }
  
    // get result
    let chars = [[],[]];
    let I = eCode.length;
    let J = dCode.length;
    while(I > 0 || J > 0) {
      switch (main_matrix[I][J][0]) {
        case UP:
          I--;
          chars[0].push(eCode.charAt(I));
          chars[1].push('-');
          break;
        case LEFT:
          J--;
          chars[0].push('-');
          chars[1].push(dCode.charAt(J));
          break;
        case UL:
          I--;
          J--;
          chars[0].push(eCode.charAt(I));
          chars[1].push(dCode.charAt(J));
          break;
         default: break;
      }
    }
    let aligned= chars.map((v) => {
      return v.reverse().join('');
      });
    
  
    let [e_aligned, d_aligned] = aligned;
  
    let num_errors = 0
  
    let eArr = Array.from(e_aligned)
    let dArr = Array.from(d_aligned)
  
    for (let i = 0; i < eArr.length; i++) {
        if (eArr[i] !== dArr[i]) {
            num_errors += 1
        }
        else {
            num_errors += 0
        }
    }
    return num_errors  
}