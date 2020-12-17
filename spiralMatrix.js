// const sprialMatrix = (m,n,a)=>{
//     let i;let k=0;let l=0;
//      /*  k - starting row index 
//         m - ending row index 
//         l - starting column index 
//         n - ending column index 
//         i - iterator 
//         */
//        while(k<m && l<n){
//            for(i=l;i<n;++i){
//                console.log(a[k][i]+'');
//            }
//            k++;
//             // Print the last column from the remaining 
//             // columns 
//             for (i = k; i < m; ++i) { 
//                 console.log(a[i][n - 1] + " "); 
//             } 
//             n--; 
//             // Print the last row from the remaining rows */ 
//             if (k < m) { 
//                 for (i = n - 1; i >= l; --i) { 
//                     console.log(a[m - 1][i] + " "); 
//                 } 
//                 m--; 
//             } 
//             // Print the first column from the remaining 
//             // columns */ 
//             if (l < n) { 
//                 for (i = m - 1; i >= k; --i) { 
//                    console.log(a[i][l] + " "); 
//                 } 
//                 l++; 
//             }
//        }
// }
// let a = [[1, 2, 3, 4, 5, 6],[7, 8, 9, 10, 11, 12],[13, 14, 15, 16, 17, 18]]
// sprialMatrix(3,6,a);

//complexity
//time:O(m*n);
//space:O(n)

//method 2 Recursive approach
 // Function for printing matrix in spiral 
    // form i, j: Start index of matrix, row 
    // and column respectively m, n: End index 
    // of matrix row and column respectively 

const sprialMatrix = (arr,i,j,m,n)=>{
    // If i or j lies outside the matrix 
    if (i >= m || j >= n) { 
        return; 
    } 

    // Print First Row 
    for (let p = i; p < n; p++) { 
        console.log(arr[i][p] + " "); 
    } 

    // Print Last Column 
    for (let p = i + 1; p < m; p++) { 
        console.log(arr[p][n - 1] + " "); 
    } 

    // Print Last Row, if Last and 
    // First Row are not same 
    if ((m - 1) != i) { 
        for (let p = n - 2; p >= j; p--) { 
            console.log(arr[m - 1][p] + " "); 
        } 
    } 

    // Print First Column, if Last and 
    // First Column are not same 
    if ((n - 1) != j) { 
        for (let p = m - 2; p > i; p--) { 
            console.log(arr[p][j] + " "); 
        } 
    } 
    sprialMatrix(arr, i + 1, j + 1, m - 1, n - 1); 

}

let a = [ [ 1, 2, 3, 4 ], 
[ 5, 6, 7, 8 ], 
[ 9, 10, 11, 12 ], 
[ 13, 14, 15, 16 ] ]; 

// Function Call 
sprialMatrix(a, 0, 0, 4, 4); 