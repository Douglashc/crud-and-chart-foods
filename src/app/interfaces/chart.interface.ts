export interface ChartInterface {
    labels?: string[],
    datasets?: DataSet[]
}

export interface DataSet {
    label?: string,
    data?: number[]
}