import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregationWarehouseMetricMeasure } from "./ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregationWarehouseMetricMeasure";
import { ExperimentsNullableDatadogMetricMeasureInput } from "./ExperimentsNullableDatadogMetricMeasureInput";
import { ExperimentsWarehouseFilterInput } from "./ExperimentsWarehouseFilterInput";

/**
 * Settings for a metric aggregation that uses a Warehouse measure. The other measure must be omitted or null.
 */
export class ExperimentsWarehouseMetricAggregationInput {
  /**
   * Stored aging threshold in days. The subject aging filter uses the aggregation window end and unit.
   */
  "agingThresholdDays"?: number;
  /**
   * Optional Datadog measure. Use null when the other measure is selected.
   */
  "datadogMetricMeasure"?: ExperimentsNullableDatadogMetricMeasureInput;
  /**
   * Whether to exclude subjects whose observation time is shorter than the aggregation window.
   */
  "enableAgingSubjectFilter"?: boolean;
  /**
   * Calculation applied to the measure values, such as sum.
   */
  "operation": string;
  /**
   * Property filters that select data for this aggregation.
   */
  "propertyFilters"?: Array<Array<ExperimentsWarehouseFilterInput>>;
  /**
   * Calculation used to evaluate the threshold.
   */
  "thresholdAggregationType"?: string;
  /**
   * Value used to determine whether the threshold is breached.
   */
  "thresholdBreachValue"?: number;
  /**
   * Operator used to compare the calculated value with the threshold.
   */
  "thresholdComparisonOperator"?: string;
  /**
   * Time unit for the threshold evaluation window. Supports seconds, minutes, hours, days, calendar_days, and
   * weeks. Calendar days start at midnight on the assignment day. Other units start at the assignment time.
   */
  "thresholdTimeframeDimension"?: string;
  /**
   * End of the threshold evaluation window, measured from assignment in the configured time unit.
   */
  "thresholdTimeframeValue"?: number;
  /**
   * End offset of the aggregation window from assignment, in timeframe_unit.
   */
  "timeframeEndValue"?: number;
  /**
   * Start offset of the aggregation window from assignment, in timeframe_unit.
   */
  "timeframeStartValue"?: number;
  /**
   * Time unit for the aggregation window. Calendar days are measured from midnight on the assignment day.
   * Other units are measured from the assignment time.
   */
  "timeframeUnit"?: string;
  /**
   * Reference to a measure defined in a warehouse metric SQL model.
   */
  "warehouseMetricMeasure": ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregationWarehouseMetricMeasure;
  /**
   * Fixed lower bound used to cap extreme measure values.
   */
  "winsorLowerFixedValue"?: number;
  /**
   * Percentile used to determine the lower bound for extreme measure values.
   */
  "winsorLowerPercentile"?: number;
  /**
   * Fixed upper bound used to cap extreme measure values.
   */
  "winsorUpperFixedValue"?: number;
  /**
   * Percentile used to determine the upper bound for extreme measure values.
   */
  "winsorUpperPercentile"?: number;
  /**
   * Method used to cap extreme measure values before aggregation.
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
      type: "ExperimentsNullableDatadogMetricMeasureInput",
    },
    enableAgingSubjectFilter: {
      baseName: "enable_aging_subject_filter",
      type: "boolean",
    },
    operation: {
      baseName: "operation",
      type: "string",
      required: true,
    },
    propertyFilters: {
      baseName: "property_filters",
      type: "Array<Array<ExperimentsWarehouseFilterInput>>",
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
      type: "ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregationWarehouseMetricMeasure",
      required: true,
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
    return ExperimentsWarehouseMetricAggregationInput.attributeTypeMap;
  }

  public constructor() {}
}
