import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Reference to a metric to include in the collection.
 */
export class ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems {
  /**
   * Identifier of the metric to include in the collection.
   */
  "metricId": string;
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
      required: true,
      format: "uuid",
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
    return ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems.attributeTypeMap;
  }

  public constructor() {}
}
