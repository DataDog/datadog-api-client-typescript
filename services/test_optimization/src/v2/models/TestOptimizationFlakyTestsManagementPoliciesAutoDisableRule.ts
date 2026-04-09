import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TestOptimizationFlakyTestsManagementPoliciesDisabledStatus } from "./TestOptimizationFlakyTestsManagementPoliciesDisabledStatus";

/**
 * Automatic disable triggering rule based on a time window and test status.
 */
export class TestOptimizationFlakyTestsManagementPoliciesAutoDisableRule {
  /**
   * Whether this auto-disable rule is enabled.
   */
  "enabled"?: boolean;
  /**
   * Test status that the disable policy applies to.
   * Must be either `active` or `quarantined`.
   */
  "status"?: TestOptimizationFlakyTestsManagementPoliciesDisabledStatus;
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
    status: {
      baseName: "status",
      type: "TestOptimizationFlakyTestsManagementPoliciesDisabledStatus",
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
    return TestOptimizationFlakyTestsManagementPoliciesAutoDisableRule.attributeTypeMap;
  }

  public constructor() {}
}
