import * as shape from 'd3-shape';

// Line Charts

export let lineChartView: any[] = [550, 400];

// options
export let lineChartShowXAxis = true;
export let lineChartShowYAxis = true;
export let lineChartGradient = false;
export let lineChartShowLegend = false;
export let lineChartShowXAxisLabel = true;
export let lineChartXAxisLabel = 'Hours';
export let lineChartShowYAxisLabel = true;
export let lineChartYAxisLabel = 'Orders';

export let lineChartColorScheme = {
    domain: ['#65009c', '#f77c00', '#b700ff', '#ffe100']
};

// line, area
export let lineChartAutoScale = true;
export let lineChartLineInterpolation = shape.curveBasis;
