function uploadImage() {
    console.log('uploadImage called');
    const fileInput = document.getElementById('fileInput');
    const preview = document.getElementById('preview');

    fileInput.addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', function() {
        preview.src = reader.result;
        console.log('uploadImage complete');
        processImage();

    });

    reader.readAsDataURL(file);
    });


}
function processImage () {
    console.log('processImage called');
    const uploadedImg = document.getElementById('preview');
    let arrResult = [];
    let numCompleted = 0;
    
    for (let i = 0; i < 45; i++){
        const currentImg = document.getElementById('localImage'+(i+1).toString());
        compareImage(uploadedImg, currentImg).then(function(data) {
            arrResult.push(data);
            numCompleted++;

            if (numCompleted === 45) {
                let minIndex = findBestFit(arrResult);
                if (minIndex === 'none'){
                    console.log('no good matches detected, retry');
                }
                else{
                    noIMG = document.getElementById('localImage' + (minIndex+1).toString()).src;
                    console.log('best match at ' + noIMG);
                }
            }
        });
    }
}

function compareImage(img1, img2) {
    console.log('compareImage called');
    return new Promise(function(resolve, reject) {
        resemble(img1.src)
            .compareTo(img2.src)
            .scaleToSameSize()
            .ignoreAntialiasing()
            .onComplete(function(data) {
            resolve(data.misMatchPercentage);
        });
    });
}

function findBestFit (arr){
    console.log('findbestfit called');
    let threashold = 5;
    let min = 100;
    let minId = 0;
    let allBadFit = true;

    for (let i = 0; i < arr.length; i++){

        if (arr[i] < (100-threashold)){
            allBadFit = false;
            if (min > arr[i]){
                min = arr[i];
                minId = i;
            }    
        }
    }

    if (allBadFit){
        return 'none';
    }
    else{
        console.log(arr[minId]);
        return minId;
    }


}


