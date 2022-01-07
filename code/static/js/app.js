// Creating an event listener
d3.select("#selDataset").on("change",function(){
    dropdown(d3.select("#selDataset").node().value)
})

function dropdown(selectedID) {

    // Use D3 Library to fetch the JSON data
    d3.json("samples.json").then((data) => {
    
        // console.log(data);
          
        d3.select("#selDataset").node().value = selectedID;
    
        const arrayID = data.metadata.filter(row => (row.id == selectedID));
        // console.log(arrayID)
        
        // Appending demographic info to panel
        var panel = d3.select("#sample-metadata").html("");
            
        Object.entries(arrayID[0]).forEach(([key,value]) =>{
            panel.append("option").text(`${key}: ${value}`)
        });      
    });
}

// Appending all the individual ID to dropdown
d3.json("samples.json").then((data) => {
    data.metadata.forEach(row => {
        d3.select("#selDataset").append('option').attr('value',row.id).text(row.id);
    })  
});


// Build Horizontal Bar and Bubble charts
function charts(selectedID) {
    d3.json("samples.json").then((data) => {

        var input = data.samples.filter(row=> row.id == selectedID);
        var result = input[0]

        var sampleValue = result.sample_values;
        var otuID = result.otu_ids;
        var labels = result.otu_labels;

        var bar_trace = {
            x:sampleValue.slice(0,10).reverse(),
            y:otuID.slice(0,10).map(i => `OTU ${i}`).reverse(),
            text:labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h"
        };

        var bar_data = [bar_trace];

        var bar_layout = {
            title: "Top 10 OTU Found" 
        };
    
        Plotly.newPlot("bar",bar_data,bar_layout);

    });
   
}


