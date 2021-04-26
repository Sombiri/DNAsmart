export function calculateDamerauLevenshtein (a, b) {
    if (a.length === 0) return b.length
    if (b.length === 0) return a.length

    let matrix = []
    let cost

    let i
    for (i=0; i <= b.length; i++) {
        matrix[i] = []
        matrix[i][0] = i
    }

    let j
    for (j=0; j <= a.length; j++) {
        matrix[0][j] = j
    }

    for (i=1; i <= b.length; i++) {
        for (j=1; j<=a.length; j++) {
            if (b.charAt(i-1) === a.charAt(j-1)) {
                cost = 0
            } else {
                cost = 1
            }

            matrix[i][j] = Math.min (matrix[i-1][j]+1, matrix[i][j-1]+1, matrix[i-1][j-1]+cost)

            if(i>1 && j>1 && b.charAt(i-1) === a.charAt(j-2) && b.charAt(i-2) === a.charAt(j-1)) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i-2][j-2]+cost)
            }


        }
    }
    return matrix[b.length][a.length]
}