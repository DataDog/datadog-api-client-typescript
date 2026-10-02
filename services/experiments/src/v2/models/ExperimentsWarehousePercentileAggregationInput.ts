import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregationWarehouseMetricMeasure } from "./ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregationWarehouseMetricMeasure";
import { ExperimentsNullableDatadogPercentileMeasureInput } from "./ExperimentsNullableDatadogPercentileMeasureInput";
import { ExperimentsPropertyFilterInput } from "./ExperimentsPropertyFilterInput";

/**
 * Settings for a percentile aggregation that uses a Warehouse measure. The other measure must be omitted or null.
 */
export class ExperimentsWarehousePercentileAggregationInput {
  /**
   * Optional Datadog percentile measure. Use null when the warehouse measure is selected.
   */
  "datadogMetricMeasure"?: ExperimentsNullableDatadogPercentileMeasureInput;
  /**
   * Percentile to calculate from the measure values.
   */
  "percentile": number;
  /**
   * Property filters that select data for the percentile calculation.
   */
  "propertyFilters"?: Array<Array<ExperimentsPropertyFilterInput>>;
  /**
   * Reference to a measure defined in a warehouse metric SQL model.
   */
  "warehouseMetricMeasure": ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregationWarehouseMetricMeasure;
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
      type: "ExperimentsNullableDatadogPercentileMeasureInput",
    },
    percentile: {
      baseName: "percentile",
      type: "number",
      required: true,
      format: "double",
    },
    propertyFilters: {
      baseName: "property_filters",
      type: "Array<Array<ExperimentsPropertyFilterInput>>",
    },
    warehouseMetricMeasure: {
      baseName: "warehouse_metric_measure",
      type: "ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregationWarehouseMetricMeasure",
      required: true,
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
    return ExperimentsWarehousePercentileAggregationInput.attributeTypeMap;
  }

  public constructor() {}
}
