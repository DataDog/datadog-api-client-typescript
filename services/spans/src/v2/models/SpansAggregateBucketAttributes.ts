import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A bucket values.
 */
export class SpansAggregateBucketAttributes {
  /**
   * The key, value pairs for each group by.
   */
  "by"?: any;
  /**
   * The compute data.
   */
  "compute"?: any;
  /**
   * A map of the metric name -> value for regular compute or list of values for a timeseries.
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
    compute: {
      baseName: "compute",
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
    return SpansAggregateBucketAttributes.attributeTypeMap;
  }

  public constructor() {}
}
