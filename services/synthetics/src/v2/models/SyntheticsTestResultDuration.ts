import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Total duration of a Synthetic test execution.
 */
export class SyntheticsTestResultDuration {
  /**
   * Whether a duration was recorded for this execution.
   */
  "hasDuration"?: boolean;
  /**
   * Duration value in milliseconds.
   */
  "value"?: number;
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
    hasDuration: {
      baseName: "has_duration",
      type: "boolean",
    },
    value: {
      baseName: "value",
      type: "number",
      format: "int64",
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
    return SyntheticsTestResultDuration.attributeTypeMap;
  }

  public constructor() {}
}
