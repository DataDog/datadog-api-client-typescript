import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Warehouse measure that supplies values for the metric.
 */
export class ExperimentsMetricV2DTODataAttributesPercentileAggregationWarehouseMetricMeasure {
  /**
   * ID of the measure.
   */
  "id"?: string;
  /**
   * Suffix used to identify this value in pipeline output columns.
   */
  "pipelineColumnSuffix"?: string;
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
    id: {
      baseName: "id",
      type: "string",
    },
    pipelineColumnSuffix: {
      baseName: "pipeline_column_suffix",
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
    return ExperimentsMetricV2DTODataAttributesPercentileAggregationWarehouseMetricMeasure.attributeTypeMap;
  }

  public constructor() {}
}
