declare module "chart-electron" {
    type ChartArray = "bar" | "horizontalBar" | "pie" | "polar" | "doughnut";
    type Chart2Array = "line" | "radar";
    type ChartPoint2Array = "bubble";

    type ChartDataArray = number[];
    type ChartData2Array = number[][];
    type ChartDataPoint2Array = IPoint[][];

    type Chart = ChartArray | Chart2Array | ChartPoint2Array;
    type ChartData = ChartData | ChartData2Array | ChartDataPoint2Array;

    interface IPlotArray {
        type: ChartArray;
        labels: string[];
        data: ChartDataArray;
    }

    interface IPlot2Array {
        type: Chart2Array;
        labels: string[];
        data: ChartData2Array;
    }

    interface IPlotPoint2Array {
        type: ChartPoint2Array;
        labels: string[];
        data: ChartDataPoint2Array;
    }

    interface IPlot {
        type: Chart;
        labels: string[];
        data: ChartData;
    }

    interface IPlotOptions {
        hideButtons?: boolean;
    }

    interface IPoint {
        x: number;
        y: number;
        r: number;
    }

    interface IJson {
        toJson(): string;
    }

    interface IPlotJson extends IPlot, IJson {}

    interface IPlotOptionsJson extends IPlotOptions, IJson {}
    
    class Plot {
        /* constructors */
        constructor(plot: IPlotArray, options?: IPlotOptions);
        constructor(plot: IPlot2Array, options?: IPlotOptions);
        constructor(plot: IPlotPoint2Array, options?: IPlotOptions);
        /* fields */
        plot: IPlotJson;
        options: IPlotOptionsJson;
        /* methods */
        save(path: string): void;
        show(): void;
    } 
}