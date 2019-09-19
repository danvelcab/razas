import { Component, OnInit } from '@angular/core';
import { BreedService } from 'src/services/breed.service';
import { Breed } from 'src/models/breed';
import { Image } from 'src/models/image';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.sass']
})
export class BreedsComponent implements OnInit {

  public breeds: Breed[] = []; // Array de razas posibles (se rellenará con los valores devueltos por la api)
  public selectedBreed: any; // Valor seleccionado en el selector de razas
  public breedImages: Image[] = [];
  public loaded = false;

  constructor(private breedService: BreedService) { }

  ngOnInit() {
    this.breedList();
  }

  /**
   * Función que llama al servicio para traernos las razas disponibles
   */
  breedList(): void {
    this.breedService.list().subscribe(
      res => {
        if (res['message']) {
          let breeds = res['message']
          for (let breed in breeds) {
              if (breeds[breed].length > 0) {
                  for(let secondaryBreed of breeds[breed]) {
                    this.addBreed(breed, secondaryBreed);                  
                  }
              } else {
                this.addBreed(null, breed);
              }         
          }
        }    
        this.loaded = true;
      },
      error => {
        alert('error');
      }
    );
  }

  /**
   * Función para traernos la lista de imagenes de una raza
   */
  breedImagesList(): void {
    this.breedImages = [];
    this.breedService.breedImageList(this.selectedBreed).subscribe(
      res => {
        if(res['message']) {
          let images = res['message'];
          for(let image of images) {
            let newImage = new Image(image);
            this.breedImages.push(newImage)
          }
        }    
      },
      error => {
        alert('error');
      }
    );
  }

  private addBreed(mainBreed: string, secondaryBreed: string): void {
    this.breeds.push({
      mainBreed: mainBreed,
      secondaryBreed: secondaryBreed
    });
  }
}
