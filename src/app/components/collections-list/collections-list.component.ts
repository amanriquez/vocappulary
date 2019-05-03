import { Component } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import * as camera from "nativescript-camera";
@Component({
  selector: 'collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['/collections-list.component.css'],
  moduleId: module.id
})
export class CollectionsList {
  title = 'hello world'

  post: any;
  constructor(private http: HttpClient) {

  }
  uploadPhoto() {
    camera.requestPermissions().then(
      function success() {
        console.log('yes')
        let options = { width: 100, height: 100, keepAspectRatio: false, saveToGallery: true };
        let imageModule = require("tns-core-modules/ui/image");
        camera.takePicture(options)
          .then(function (imageAsset) {
            console.log("Result is an image asset instance");
            var image = new imageModule.Image();
            image.src = imageAsset;
            console.log(imageAsset.options.width, imageAsset.options.height)
          }).catch(function (err) {
            console.log("Error -> " + err.message);
          });
      },
      function failure() {
        console.log('no')
      }
    );



    // let body = {
    //   "url": "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.caribfocus.com%2Fwp-content%2Fuploads%2F2015%2F09%2Fapples2.jpg&f=1"
    // }
    // this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    //   .subscribe(data=>{
    //     console.log(data)
    //     this.post = data;
    //   })

    console.log('uploadPhoto');
  }


 } 