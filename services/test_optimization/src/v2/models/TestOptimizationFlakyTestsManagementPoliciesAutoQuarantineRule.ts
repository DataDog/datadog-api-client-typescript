import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Automatic quarantine triggering rule based on a time window.
 */
export class TestOptimizationFlakyTestsManagementPoliciesAutoQuarantineRule {
  /**
   * Whether this auto-quarantine rule is enabled.
   */
  "enabled"?: boolean;
  /**
   * Time window in seconds over which flakiness is evaluated. Must be greater than 0.
   */
  "windowSeconds"?: number;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    windowSeconds: {
      baseName: "window_seconds",
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
    return TestOptimizationFlakyTestsManagementPoliciesAutoQuarantineRule.attributeTypeMap;
  }

  public constructor() {}
}
