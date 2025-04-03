import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object containing the definition of a metric's distinct volume.
 */
export class MetricDistinctVolumeAttributes {
  /**
   * Distinct volume for the given metric.
   */
  "distinctVolume"?: number;
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
    distinctVolume: {
      baseName: "distinct_volume",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricDistinctVolumeAttributes.attributeTypeMap;
  }

  public constructor() {}
}
