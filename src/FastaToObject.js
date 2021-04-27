//fasta2json class
// eslint-disable-next-line
var fasta2json = new function()
{
	
	//Line break string
	this.line_break = '\n';
	
	
	//Parse fasta string
	this.ParseFasta = function(str)
	{
		//Generates the new json
		let fasta = [];
		
		//Split
		let seqs = str.split('>');
		
		//Loop starting on 1, because the first element of seqs is null
		for(let i = 1; i < seqs.length; i++)
		{
			//Replace the \r
			seqs[i] = seqs[i].replace(/\r/g, '');
			
			//New element
			let sequence = {};
			
			//Split the file content
			let fas = seqs[i].split(this.line_break);
			
			//Save the head
			sequence.label = fas[0];
			
			//Sequences
			sequence.value = '';
			
			//Push the sequences
			for(let j = 1; j < fas.length; j++)
			{
				//Add
				sequence.value = sequence.value + fas[j];
			}
			
			//Push
			fasta.push(sequence);
		}
		
		//Return the fasta
		return fasta;
	};

};


//Check for exports
if (typeof module === "object" && module.exports)
{
	//Export module
	module.exports = fasta2json;
}