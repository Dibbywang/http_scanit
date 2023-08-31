# http_scanit
<h3>A simple tensorflowjs based image recognition webap</h3>

This project is a web application with no backend requirement that utilizes the TensorFlow.js library to recognize images shown on the user’s webcam and categorize them into one of four different images. If a good enough fit (>95%) is found, the webapp redirects the user to the HTML page with the image’s name.

<h3>Installation</h3>

- Clone this repository.

<h3>Usage</h3>

- localhost the file through python -m http.server
- Allow access to your webcam.
- Show an image to your webcam and wait for the application to recognize it.
    * **Images can be located at the try_using_these_images folder.**
- See that you have been redirected


<h3>Methods</h3>
- Tensorflow model trained with [teachable machine](https://teachablemachine.withgoogle.com/) train and around 8 images per class.


<h3>Try the webapp by visiting [dibbywang.github.io/http_scanit](https://dibbywang.github.io/http_scanit)</h3>

