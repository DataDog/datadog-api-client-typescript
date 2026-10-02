import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsMetricPropertyFilter } from "./ExperimentsMetricPropertyFilter";
import { ExperimentsMetricV2DTODataAttributesPercentileAggregationDatadogMetricMeasure } from "./ExperimentsMetricV2DTODataAttributesPercentileAggregationDatadogMetricMeasure";
import { ExperimentsMetricV2DTODataAttributesPercentileAggregationWarehouseMetricMeasure } from "./ExperimentsMetricV2DTODataAttributesPercentileAggregationWarehouseMetricMeasure";

/**
 * Source measure and settings for a percentile metric.
 */
export class ExperimentsMetricV2DTODataAttributesPercentileAggregation {
  /**
   * Datadog source and query that supply values for the metric.
   */
  "datadogMetricMeasure"?: ExperimentsMetricV2DTODataAttributesPercentileAggregationDatadogMetricMeasure;
  /**
   * Percentile calculated from the selected measure.
   */
  "percentile"?: number;
  /**
   * Suffix used to identify this value in pipeline output columns.
   */
  "pipelineColumnSuffix"?: string;
  /**
   * Filters applied to the metric aggregation.
   */
  "propertyFilters"?: Array<Array<ExperimentsMetricPropertyFilter>>;
  /**
   * Warehouse measure that supplies values for the metric.
   */
  "warehouseMetricMeasure"?: ExperimentsMetricV2DTODataAttributesPercentileAggregationWarehouseMetricMeasure;
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
    datadogMetricMeasure: {
      baseName: "datadog_metric_measure",
      type: "ExperimentsMetricV2DTODataAttributesPercentileAggregationDatadogMetricMeasure",
    },
    percentile: {
      baseName: "percentile",
      type: "number",
      format: "double",
    },
    pipelineColumnSuffix: {
      baseName: "pipeline_column_suffix",
      type: "string",
    },
    propertyFilters: {
      baseName: "property_filters",
      type: "Array<Array<ExperimentsMetricPropertyFilter>>",
    },
    warehouseMetricMeasure: {
      baseName: "warehouse_metric_measure",
      type: "ExperimentsMetricV2DTODataAttributesPercentileAggregationWarehouseMetricMeasure",
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
    return ExperimentsMetricV2DTODataAttributesPercentileAggregation.attributeTypeMap;
  }

  public constructor() {}
}
