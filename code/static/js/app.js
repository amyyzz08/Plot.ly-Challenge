// Appending all the individual ID to dropdown
d3.json("samples.json").then((data) => {
    data.metadata.forEach(row => {
        d3.select("#selDataset").append('option').attr('value',row.id).text(row.id);
    })  
})

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
        
        // Filtering information based on user's selected ID
        var input = data.samples.filter(row=> row.id == selectedID);
        var result = input[0]

        var sampleValue = result.sample_values;
        var otuID = result.otu_ids;
        var labels = result.otu_labels;
        var washfreq = 

        // Build Horizontal Bar Chart
        bar_trace = {
            x:sampleValue.slice(0,10).reverse(),
            y:otuID.slice(0,10).map(i => `OTU ${i}`).reverse(),
            text:labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h",
            marker:{
                opacity: 0.5,
                color: "skyblue"
            }
        };

        var bar_data = [bar_trace];

        var bar_layout = {
            title: "Top 10 OTU Found",
            xaxis: {title: "Number of samples found"}
        };
    
        Plotly.newPlot("bar",bar_data,bar_layout);

        // Build Bubble Chart
        var bubble_trace = {
            x:otuID,
            y:sampleValue,
            text:labels,
            mode: "markers",
            marker: {
                size: sampleValue,
                color: otuID,
                colorscale: 'YlGnBu'
            }
        };

        var bubble_data = [bubble_trace];

        var bubble_layout = {
            title: `Bacteria found for Subject: ${selectedID}`,
            yaxis: {title: "Number of Samples"},
            xaxis: {title: "Unique OTU Found"},
            height: 700,
            width: 1200
        };
    
        Plotly.newPlot("bubble",bubble_data,bubble_layout);

        // Build Gauge Chart
        var filteredID = data.metadata.filter(row=> row.id == selectedID);
        var result = filteredID[0]
        
        var washfreq = result.wfreq;

        gauge_trace = {
            domain: {x:[0,1],y:[0,1]},
            value: washfreq,
            title: "Wash Frequncy (Scrubs per Week)",
            type: "indicator",
            mode: "gauge+number",
            gauge: {
            axis: {range: [0,9]},
            // bar: "black",
            steps: [
                { range: [0, 1], color: "#7abaf2" },
                { range: [1, 2], color: "#47c6f5" },
                { range: [2, 3], color: "#00d0ec" },
                { range: [3, 4], color: "#00d8d8" },
                { range: [4, 5], color: "#25debb" },
                { range: [5, 6], color: "#69e199" },
                { range: [6, 7], color: "#9de177" },
                { range: [7, 8], color: "#cedc5a" },
                { range: [8, 9], color: "#ffd34e" }]
            }
        };

        gauge_data = [gauge_trace];

        gauge_layout = {
            width: 500,
            height: 500
        };

        Plotly.newPlot("gauge",gauge_data,gauge_layout);
    });
}







