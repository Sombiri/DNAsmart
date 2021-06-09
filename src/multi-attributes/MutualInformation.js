export function calculateMutualInfo(eCode, dCode){

    function dEntropy(){
        const dlenStr = dCode.length
    
        const frequence = Array.from(dCode)
            .reduce((freq, c) => (freq[c] = (freq[c] || 0) + 1) && freq, {})
    
        const getSumdEntropy = Object.values(frequence)
            .reduce((sum, E) => sum  - E/dlenStr * Math.log2(E/dlenStr), 0)
        
        return getSumdEntropy
    }


    function entropy(){
        const lenStr = eCode.length
    
        const frequence = Array.from(eCode)
            .reduce((freq, c) => (freq[c] = (freq[c] || 0) + 1) && freq, {})
    
        const getSumEntropy = Object.values(frequence)
            .reduce((sum, E) => sum  - E/lenStr * Math.log2(E/lenStr), 0)
        
        return getSumEntropy
    }

    function jEntropy(){
        const totalStr = dCode.length * eCode.length
        let OneArr = []
    
        let matrix = Array.from(dCode).map(row => Array.from(eCode).map(val => row + val))
        
    
        matrix.forEach(eachProb =>
            eachProb.forEach(elem =>
                OneArr.push(elem)
            ))
        const count = OneArr.reduce((freq, c) => (freq[c] = (freq[c] || 0) + 1) && freq, {})
    
        const getSumJoint = Object.values(count)
            .reduce((sum, E) => sum  - E/totalStr * Math.log2(E/totalStr), 0)
        return getSumJoint
    
    }

    function conEntropy() {
        const conEnt = jEntropy() - entropy()
        return conEnt

    }

    const muInfo = dEntropy() - conEntropy()
    return muInfo

    
}