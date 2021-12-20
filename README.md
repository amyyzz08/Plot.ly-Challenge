# **Plotly Challenge: Belly Button Biodiversity**
![](images/bacteria.jpg)

# Background
This challenge involves building an interactive dashboard to explore the Belly Button Biodiversity <a href="data/samples.json">dataset</a> which catalogs the microbes that colonise human navels.

The datasets reveals that a small handful of microbials specied (also known as operational taxonomic units, OTUs) were present in more than 70% of people.
<br>

# Using Plotly 

1. Utilise the 3D Library to read into the json dataset of the OTU samples

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in the specified individual.
    * Use <mark style="background-color: lightblue">sample_values</mark> as the values for the bar chart.
    * Use <mark style="background-color: lightblue">otu_ids</mark> as the labels for the bar chart.
    * Use <mark style="background-color: lightblue">otu_labels</mark> as the hovertext for the chart.

3. Create a bubble chart that displays each sample.
    * Use <mark style="background-color: lightblue">otu_ids</mark> for the x values.
    * Use <mark style="background-color: lightblue">sample_values</mark> for the y values.
    * Use <mark style="background-color: lightblue">otu_values</mark> for the marker size.
    * Use <mark style="background-color: lightblue">otu_ids</mark> for the marker colours.
    * Use <mark style="background-color: lightblue">otu_labels</mark>for the text values.

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

6. Update all of the plots any time that a new sample is selected.
<br>

 **My Dashboard Below**
 
