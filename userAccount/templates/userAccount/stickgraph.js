
            //Width and height
            var w = 1000;
            var h = 400;
            var barPadding = 3;

            var dataset = [ 5, 10, 200, 1000, 21, 25, 22, 18, 15, 13,
                            11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

            //Create SVG element
            var svg = d3.select("#stickgraph");

            svg.selectAll("rect")
               .data(dataset)
               .enter()
               .append("rect")
               .attr("x", function(d, i) {
                       return i * (w / dataset.length);
               })
               .attr("y", function(d) {
                       return h - (d/5);
               })
               .attr("width", w / dataset.length - barPadding)
               .attr("height", function(d) {
                       return d;
               })
               .attr("fill", function(d) {
                    return "rgb(0, 0, " + (d * 10) + ")";
               });

            svg.selectAll("text")
               .data(dataset)
               .enter()
               .append("text")
               .text(function(d) {
                       return d;
               })
               .attr("text-anchor", "middle")
               .attr("x", function(d, i) {
                       return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
               })
               .attr("y", function(d) {
                       return h - (d/5) - 14;
               })
               .attr("font-family", "sans-serif")
               .attr("font-size", "15px")
               .attr("fill", "black");
    
