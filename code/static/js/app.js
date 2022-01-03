
    // Use D3 Library to fetch the JSON data
    d3.json("samples.json").then((data) => {
    
    // console.log(data);

    // clear dropdown menu
    d3.select("#selDataset").html("");

    // Iterating through array to select each individual ID and add to dropdown menu
    data.metadata.forEach(row => {

        var id = row.id
        // console.log(id);
        
        // Appending all individual IDs to the dropdown menu
        d3.select("#selDataset").append('option').attr('value',id).text(id);    

        var selectedID = d3.select("#selDataset").node().value;

        const arrayID = data.metadata.filter(row => (row.id == selectedID));
        console.log(arrayID)
    
         // Appending info to panel
        var panel = d3.select("#sample-metadata");
        panel.html("");
        Objects.entries(arrayID[0]).forEach(row=>{
            panel.append("option").text(`${row[0]}: ${row[1]}`)
        });

    });





})