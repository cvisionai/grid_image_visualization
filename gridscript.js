//Load in character data
d3.json("./images_local.json").then(function(data){
    createVis(data);
d3.selectAll(".char").sort(function(x, y){
  return d3.ascending(x['imgclass'], y['imgclass']);
});
d3.selectAll(".char").style("grid-row-start", "auto");
d3.selectAll(".char").style("grid-column-start", "auto");
});

d3
   .select("#update_data")
   .on("click", function () {
        updateData();
   })
;

function updateData() {
    d3.json("./annotations_subsample.json").then(function(data){
            createVis(data);
    });
}

var grid = d3.select("body")
    .append("div")
    .attr("id", "grid")
    .attr("class", "grid")
  ;

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function createVis(my_data) {
  chars = grid
    .selectAll("div")
    .data(my_data.images, function(d) {return d.imgurl})
    .join(
      enter => {enter
        .append("div")
        .attr("class", "char")
        .attr("data-bg", function(d){
            return 'url("'+d.imgurl+'?raw=true")';
            })
        .append("div")
        .attr("class", "charContent")
        .append("h2")
        .text(function(d,i){
            return d.imgclass;
        })
        ;
        char_click = enter
          .selectAll(".char")
          .on("click", function(d, i) {
                modal.style.display = "block";
                modalImg.src = d.imgurl;
                captionText.innerHTML = d.imgclass;
          });
      },
      update => {
        update.select(".charContent").remove();
        update.append("div")
        .attr("class", "charContent")
        .append("h2")
        .text(function(d,i){
          return d.imgclass;
        })
      },
      exit => exit.remove());
 
  lazyLoadInstance.update();
}

function species_sort(species){
    d3.selectAll(".char").sort(function(a, b) {
        let count = 0;
        if(a['imgclass'] == species && b['imgclass'] != species){
            console.log("greater than");
            count=-1;
        };
        if(b['imgclass'] == species && a['imgclass'] != species){
            console.log("less than");
            count=1;
        };   
        return count;
      });
      d3.selectAll(".char").classed("open", false);
      d3.selectAll(".char").style("grid-row-start", "auto");
      d3.selectAll(".char").style("grid-column-start", "auto");
}

d3
  .select("#fish")
  .on("click", function () {
      species_sort("fish")
  })
;

d3
  .select("#crab")
  .on("click", function () {
      species_sort("crab")
  })
;

d3
  .select("#ray")
  .on("click", function () {
      species_sort("ray")
  })
;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
document.addEventListener('keydown', function(e) {
    let keyCode = e.keyCode;
    if (keyCode === 27) {//keycode is an Integer, not a String
      modal.style.display = "none";
    }
});

var lazyLoadInstance = new LazyLoad({
        elements_selector: ".char"
    });