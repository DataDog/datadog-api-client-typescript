import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Bucket values.
 */
export class RUMBucketResponse {
  /**
   * The key-value pairs for each group-by.
   */
  "by"?: any;
  /**
   * A map of the metric name to value for regular compute, or a list of values for a timeseries.
   */
  "computes"?: any;
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
    by: {
      baseName: "by",
      type: "any",
    },
    computes: {
      baseName: "computes",
      type: "any",
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
    return RUMBucketResponse.attributeTypeMap;
  }

  public constructor() {}
}
