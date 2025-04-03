import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object describing the retry strategy to apply to a Synthetic test.
 */
export class SyntheticsTestOptionsRetry {
  /**
   * Number of times a test needs to be retried before marking a
   * location as failed. Defaults to 0.
   */
  "count"?: number;
  /**
   * Time interval between retries (in milliseconds). Defaults to
   * 300ms.
   */
  "interval"?: number;
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
    count: {
      baseName: "count",
      type: "number",
      format: "int64",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "double",
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
    return SyntheticsTestOptionsRetry.attributeTypeMap;
  }

  public constructor() {}
}
