declare module "chart-electron" {
    type Chart = "bar" | "horizontalBar" | "pie" | "polar" | "doughunt" | "line" | "radar" | "bubble";
    
    type ChartData = number[] //  bar, horizontalBar, pie, polar, doughunt
                    | number[][] // line, radar
                    | IPoint[][]; // bubble

    interface IPlot {
        type: Chart;
        labels: string[];
        data: ChartData;
    }

    interface IPlotOptions {
        saveAfterLoadingPath?: boolean;
        hideButtons?: boolean;
    }

    interface IPoint {
        x: number;
        y: number;
        r: number;
    }
    
    class Plot {
        constructor(plot: IPlot, options?: IPlotOptions);
        show(): void;
    } 
}