import type { Component } from "react";


declare export type RawDataType = {

    key: string,
    value: string

}; // RawDataType


declare export type RateDataType = RawDataType;


declare type SingleDataItem = {

    name: string,
    rawData: RawDataType,
    rateData: RateDataType

}; // SingleDataItem


declare export type KeyedDataType = {

    [string]: SingleDataItem

}; // KeyedDataType


declare export type ValuesDataType = {

    key: string,
    name: string,
    rawData: RawDataType,
    rateData: RateDataType,

}; // ValuesDataType


declare export type HeadingType = {

    id: string
    label: string,
    format: string,
    getter: (ValuesDataType) => string,
    keyGetter?: (ValuesDataType) => string

} // HeadingType


declare type ZoomData = {

    min: number,
    max: number

}; // ZoomData

declare export type MainContentItem = {

    headings: Array<HeadingType>,
    label: string,
    textLabel: string,
    url: string,
    geo: string,
    geoKey: string,
    maxCircleRadius: number,
    blobColour: string,
    zoom: ZoomData

}; // MainContentType


declare export type MainContentType = Array<MainContentItem>;


declare export type DataObjectType = {

    rateData: {
        key: string,
        value: number
    },
    values: Array<ValuesDataType>,
    keyedValues: KeyedDataType,
    getByKey: (string) => SingleDataItem

}; // DataObjectType


declare export type PopulationDataType = {

    [string]: number

} // PopulationDataType


export interface TableState {

    state: {
        loading: boolean
        data: any | null
        populationData: PopulationDataType | null,
    }
} // TableState


declare export type TableProps = {

    headings: Array<HeadingType>,
    hash: string,
    populationData: PopulationDataType,
    url: string,
    data: DataObjectType,
    dataSetter: (d: any) => void,
    sortBy: {
        field: string,
        ascending: boolean
    },
    sortUpdate: (string, string, boolean) => void

}; // TableProps


declare export type GeoDataType = Array<{
    properties: {
        [string]: {
            lat: number,
            long: number
        },
        [string]: any
    },
    id?: string,
    [string]: any
}>; // GeoDataType


export interface MapState {

    layerGroup: any | null
    map: any | null,
    canvas: any | null
    loading: boolean
    geoData: GeoDataType | null
    glStatus: boolean
    centrePoint: [number, number] | null

} // MapState


declare export type MapProps = {

    geo: string,
    geoKey: string,
    geoDataSetter: DataObjectType => void,
    geoData: GeoDataType | null,
    hash: string,
    maxCircleRadius: number,
    blobColour: string,
    zoom: ZoomData,
    data: DataObjectType | null,
    isRate: boolean,
    children: any

}; // MapProps


export interface MapTableState {

    data: any
    category: string
    viewMapAs: "rate" | "case"
    area: string
    populationData: any  | null
    geoData: any | null
    loading: boolean
    mapObject: any,
    hash: string,
    tableSort: {
        [string]: {
            field: string,
            ascending: boolean
        }
    }

} // MapTableState


declare export type MapTableProps = {

    isMobile: boolean,
    children: Component,
    history: {
        locations: {
            hash: string,
            [string]: any
        },
        [string]: any
    }

};  // MapTableProps


declare export type RGB = {

    r: number,
    g: number,
    b: number

}; // RGB


declare export type URIParameters = {

    [string]: string

}; // URIParameters
