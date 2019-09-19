import { environment } from 'src/environments/environment'

export class ApiRoutesHelper {
    public static getBreedsURL(): string {
        return ApiRoutesHelper.getHostURL() + 'breeds/list/all';
    }
    public static getBreedImagesURL(breed: string): string {
        return ApiRoutesHelper.getHostURL() + 'breed/' + breed +'/images';
    }

    /** Método que devuelve la url base del endpoint */
    private static getHostURL(): string {
        return environment.protocol + environment.host + environment.apiPrefix;
    }
}