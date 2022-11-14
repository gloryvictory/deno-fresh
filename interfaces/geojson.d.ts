declare module "GeoJSON" {

    export interface Geometry {
        type: string;
        coordinates: number[][][];
    }

    export interface Properties {
        objectid: number;
        area_lic: string;
        god_licenz: number;
        nom_zsngp: number;
        nom_list: string;
        nom: number;
        data_start: any;
        data_end: any;
        vid: string;
        tip: string;
        name: string;
        number: string;
        sostoyanie: string;
        priznak: string;
        nom_lic: string;
        head_nedro: string;
        oblast: string;
        zsngp: string;
        nedropolz: string;
        nedropol_1: string;
        nom_yrfo: number;
        authority: string;
        st_area(shape)?: number;
        st_length(shape)?: number;
    }

    export interface Feature {
        type: string;
        id: number;
        geometry: Geometry;
        properties: Properties;
    }

    export interface RootObject {
        type: string;
        features: Feature[];
    }

}

