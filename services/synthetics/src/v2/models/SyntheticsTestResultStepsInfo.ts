import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Step execution summary for a Synthetic test result.
 */
export class SyntheticsTestResultStepsInfo {
  /**
   * Number of completed steps.
   */
  "completed"?: number;
  /**
   * Number of steps with errors.
   */
  "errors"?: number;
  /**
   * Total number of steps.
   */
  "total"?: number;
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
    completed: {
      baseName: "completed",
      type: "number",
      format: "int64",
    },
    errors: {
      baseName: "errors",
      type: "number",
      format: "int64",
    },
    total: {
      baseName: "total",
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
    return SyntheticsTestResultStepsInfo.attributeTypeMap;
  }

  public constructor() {}
}
