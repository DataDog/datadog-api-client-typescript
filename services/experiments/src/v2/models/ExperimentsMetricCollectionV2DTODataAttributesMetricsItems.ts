import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A metric included in the collection.
 */
export class ExperimentsMetricCollectionV2DTODataAttributesMetricsItems {
  /**
   * ID of the metric represented by this entry.
   */
  "metricId"?: string;
  /**
   * Display name of the metric represented by this entry.
   */
  "metricName"?: string;
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
    metricId: {
      baseName: "metric_id",
      type: "string",
    },
    metricName: {
      baseName: "metric_name",
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
    return ExperimentsMetricCollectionV2DTODataAttributesMetricsItems.attributeTypeMap;
  }

  public constructor() {}
}
