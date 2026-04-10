import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for the attempt-to-fix Flaky Tests Management policy.
 */
export class TestOptimizationFlakyTestsManagementPoliciesAttemptToFix {
  /**
   * Number of retries when attempting to fix a flaky test. Must be greater than 0.
   */
  "retries"?: number;
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
    retries: {
      baseName: "retries",
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
    return TestOptimizationFlakyTestsManagementPoliciesAttemptToFix.attributeTypeMap;
  }

  public constructor() {}
}
