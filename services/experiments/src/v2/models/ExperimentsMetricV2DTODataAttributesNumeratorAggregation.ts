import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsMetricPropertyFilter } from "./ExperimentsMetricPropertyFilter";
import { ExperimentsMetricV2DTODataAttributesPercentileAggregationDatadogMetricMeasure } from "./ExperimentsMetricV2DTODataAttributesPercentileAggregationDatadogMetricMeasure";
import { ExperimentsMetricV2DTODataAttributesPercentileAggregationWarehouseMetricMeasure } from "./ExperimentsMetricV2DTODataAttributesPercentileAggregationWarehouseMetricMeasure";

/**
 * Source measure and aggregation settings for a metric value.
 */
export class ExperimentsMetricV2DTODataAttributesNumeratorAggregation {
  /**
   * Stored aging threshold in days. The subject aging filter uses the aggregation window end and unit.
   */
  "agingThresholdDays"?: number;
  /**
   * Datadog source and query that supply values for the metric.
   */
  "datadogMetricMeasure"?: ExperimentsMetricV2DTODataAttributesPercentileAggregationDatadogMetricMeasure;
  /**
   * Whether to exclude subjects whose observation time is shorter than the aggregation window.
   */
  "enableAgingSubjectFilter"?: boolean;
  /**
   * Aggregation applied to the selected measure.
   */
  "operation"?: string;
  /**
   * Suffix used to identify this value in pipeline output columns.
   */
  "pipelineColumnSuffix"?: string;
  /**
   * Filters applied to the metric aggregation.
   */
  "propertyFilters"?: Array<Array<ExperimentsMetricPropertyFilter>>;
  /**
   * Aggregation used to evaluate the threshold.
   */
  "thresholdAggregationType"?: string;
  /**
   * Value used to determine whether the threshold is breached.
   */
  "thresholdBreachValue"?: number;
  /**
   * Comparison applied between the aggregated value and the threshold.
   */
  "thresholdComparisonOperator"?: string;
  /**
   * Time unit used for the threshold evaluation window.
   */
  "thresholdTimeframeDimension"?: string;
  /**
   * Size of the threshold evaluation window.
   */
  "thresholdTimeframeValue"?: number;
  /**
   * End of the aggregation window in the specified time unit.
   */
  "timeframeEndValue"?: number;
  /**
   * Start of the aggregation window in the specified time unit.
   */
  "timeframeStartValue"?: number;
  /**
   * Time unit used for the aggregation window.
   */
  "timeframeUnit"?: string;
  /**
   * Warehouse measure that supplies values for the metric.
   */
  "warehouseMetricMeasure"?: ExperimentsMetricV2DTODataAttributesPercentileAggregationWarehouseMetricMeasure;
  /**
   * Fixed lower bound used to cap metric values.
   */
  "winsorLowerFixedValue"?: number;
  /**
   * Percentile used to determine the lower bound for capped metric values.
   */
  "winsorLowerPercentile"?: number;
  /**
   * Fixed upper bound used to cap metric values.
   */
  "winsorUpperFixedValue"?: number;
  /**
   * Percentile used to determine the upper bound for capped metric values.
   */
  "winsorUpperPercentile"?: number;
  /**
   * Method used to cap extreme metric values.
   */
  "winsorizationStrategy"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    agingThresholdDays: {
      baseName: "aging_threshold_days",
      type: "number",
      format: "int64",
    },
    datadogMetricMeasure: {
      baseName: "datadog_metric_measure",
      type: "ExperimentsMetricV2DTODataAttributesPercentileAggregationDatadogMetricMeasure",
    },
    enableAgingSubjectFilter: {
      baseName: "enable_aging_subject_filter",
      type: "boolean",
    },
    operation: {
      baseName: "operation",
      type: "string",
    },
    pipelineColumnSuffix: {
      baseName: "pipeline_column_suffix",
      type: "string",
    },
    propertyFilters: {
      baseName: "property_filters",
      type: "Array<Array<ExperimentsMetricPropertyFilter>>",
    },
    thresholdAggregationType: {
      baseName: "threshold_aggregation_type",
      type: "string",
    },
    thresholdBreachValue: {
      baseName: "threshold_breach_value",
      type: "number",
      format: "double",
    },
    thresholdComparisonOperator: {
      baseName: "threshold_comparison_operator",
      type: "string",
    },
    thresholdTimeframeDimension: {
      baseName: "threshold_timeframe_dimension",
      type: "string",
    },
    thresholdTimeframeValue: {
      baseName: "threshold_timeframe_value",
      type: "number",
      format: "double",
    },
    timeframeEndValue: {
      baseName: "timeframe_end_value",
      type: "number",
      format: "double",
    },
    timeframeStartValue: {
      baseName: "timeframe_start_value",
      type: "number",
      format: "double",
    },
    timeframeUnit: {
      baseName: "timeframe_unit",
      type: "string",
    },
    warehouseMetricMeasure: {
      baseName: "warehouse_metric_measure",
      type: "ExperimentsMetricV2DTODataAttributesPercentileAggregationWarehouseMetricMeasure",
    },
    winsorLowerFixedValue: {
      baseName: "winsor_lower_fixed_value",
      type: "number",
      format: "double",
    },
    winsorLowerPercentile: {
      baseName: "winsor_lower_percentile",
      type: "number",
      format: "double",
    },
    winsorUpperFixedValue: {
      baseName: "winsor_upper_fixed_value",
      type: "number",
      format: "double",
    },
    winsorUpperPercentile: {
      baseName: "winsor_upper_percentile",
      type: "number",
      format: "double",
    },
    winsorizationStrategy: {
      baseName: "winsorization_strategy",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ExperimentsMetricV2DTODataAttributesNumeratorAggregation.attributeTypeMap;
  }

  public constructor() {}
}
