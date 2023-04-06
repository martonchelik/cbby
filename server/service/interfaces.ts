export interface ICars{
    brands?: {idcb: number, carbrand: string}[];
    gears?: {gb: string}[];
    engines?: {engine: string}[];
    bodies?: {bodytype: string}[];
    trans?: {drivetype: string}[];
};

export interface IBody{
    bodies?: {bodytype: string}[];
};

export interface IDrive {
    trans?: {drivetype: string}[];
};

export interface IGears {
    gears?: {gb: string}[];
};

export interface IBrands {
    brands?: {idcb: number, carbrand: string}[];
};

export interface IEngines {
    engines?: {engine: string}[];
};