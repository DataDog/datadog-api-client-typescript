import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Used to perform a histogram computation (only for measure facets).
 * Note: at most 100 buckets are allowed, the number of buckets is (max - min)/interval.
 */
export class LogsGroupByHistogram {
  /**
   * The bin size of the histogram buckets
   */
  "interval": number;
  /**
   * The maximum value for the measure used in the histogram
   * (values greater than this one are filtered out)
   */
  "max": number;
  /**
   * The minimum value for the measure used in the histogram
   * (values smaller than this one are filtered out)
   */
  "min": number;
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
    interval: {
      baseName: "interval",
      type: "number",
      required: true,
      format: "double",
    },
    max: {
      baseName: "max",
      type: "number",
      required: true,
      format: "double",
    },
    min: {
      baseName: "min",
      type: "number",
      required: true,
      format: "double",
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
    return LogsGroupByHistogram.attributeTypeMap;
  }

  public constructor() {}
}
