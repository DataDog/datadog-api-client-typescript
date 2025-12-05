import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object describing the extra options for a Synthetic suite.
 */
export class SyntheticsSuiteOptions {
  /**
   * Percentage of critical tests failure needed for a suite to fail.
   */
  "alertingThreshold"?: number;
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
    alertingThreshold: {
      baseName: "alerting_threshold",
      type: "number",
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
    return SyntheticsSuiteOptions.attributeTypeMap;
  }

  public constructor() {}
}
