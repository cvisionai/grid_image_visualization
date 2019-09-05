# grid_image_visualization
D3 application to fetch images and view them in a grid. With various other functionality.

This is a simple web app to display a grid of images fetched from urls specified in a JSON payload, such as might be received from a REST query. The functionality includes automatic sorting of the images, as well as expansion of a grid object on click. There is much work to be done to incorporate other display functionality, as well as the ability to change parameters and interact via POST requests.

As currently structured, the app expects entries as formatted in images.json. This has an array element called images, which contains individual objects which have the fields 'imgurl' and 'imgclass'. These objects are used to create the grid elements, and the labels for them.

## TODO (This section is large):
* Make a handler for constructing GET requests, and bind that to the Update routine (probably rename it as load)
* Make a function for handling expected elements in the GET request, to allow flexible informationt to be displayed in each element
* Create sidebar area for "expanded" information to be displayed when an element is clicked
* Create page sidebar area for various interactions (e.g. constructing filters for input into the GET request, viewing label tree elements, etc.)
* Create a handler for constructing POST requests
* Separate html, css, and js files
* Many others I haven't thought of



