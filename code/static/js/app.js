// Use D3 Library to fetch the JSON data
var dataset = "../data/samples.json"

d3.json(dataset).then(function(json) {
    // console.log(json)
    
    // Grab data from json objects to build plots
    var sampleValue = json.samples.sample_values;
    var otuID = json.samples.otu_ids;
    var outLabels = json.samples.otu_labels;

        // Horizontal bar chart to dispaly top 10 OUTs 
        var trace = {
        name: 
        x: sampleValue,
        y: otuID,
        type: "bar",
        orientation: "h"
        };

        var bar_data = [trace];

        var bar_layout = {
        title: "Top 10 OTUs found",
        xaxis: {title: "Sample Value"},
        yaxis: {title: "OTU ID"}
        };

    Plotly.newPlot("bar", bar_data, bar_layout);    

    });
}
buildPlot();

