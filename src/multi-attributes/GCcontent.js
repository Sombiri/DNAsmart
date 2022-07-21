export function calculateGCcontent(dna_seq){

    function count(str, letter) {
        var letter_Count = 0;
        for (var position = 0; position < str.length; position++) {
         if (str.charAt(position) === letter) {
          letter_Count++;
         }
        }
        return letter_Count;
       }

    let g = count(dna_seq, "G")
    let c = count(dna_seq, "C")
    let a = count(dna_seq, "A")
    let t = count(dna_seq, "T")


    const gc_content = ((g + c ) / (g + c + a + t) * 100).toFixed(2)

    return parseFloat(gc_content)

}