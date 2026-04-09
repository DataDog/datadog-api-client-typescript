import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TestOptimizationFlakyTestsManagementPoliciesAutoDisableRule } from "./TestOptimizationFlakyTestsManagementPoliciesAutoDisableRule";
import { TestOptimizationFlakyTestsManagementPoliciesBranchRule } from "./TestOptimizationFlakyTestsManagementPoliciesBranchRule";
import { TestOptimizationFlakyTestsManagementPoliciesDisabledFailureRateRule } from "./TestOptimizationFlakyTestsManagementPoliciesDisabledFailureRateRule";

/**
 * Configuration for the disabled Flaky Tests Management policy.
 */
export class TestOptimizationFlakyTestsManagementPoliciesDisabled {
  /**
   * Automatic disable triggering rule based on a time window and test status.
   */
  "autoDisableRule"?: TestOptimizationFlakyTestsManagementPoliciesAutoDisableRule;
  /**
   * Branch filtering rule for a Flaky Tests Management policy.
   */
  "branchRule"?: TestOptimizationFlakyTestsManagementPoliciesBranchRule;
  /**
   * Whether the disabled policy is enabled.
   */
  "enabled"?: boolean;
  /**
   * Failure-rate-based rule for the disabled policy.
   */
  "failureRateRule"?: TestOptimizationFlakyTestsManagementPoliciesDisabledFailureRateRule;
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
    autoDisableRule: {
      baseName: "auto_disable_rule",
      type: "TestOptimizationFlakyTestsManagementPoliciesAutoDisableRule",
    },
    branchRule: {
      baseName: "branch_rule",
      type: "TestOptimizationFlakyTestsManagementPoliciesBranchRule",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    failureRateRule: {
      baseName: "failure_rate_rule",
      type: "TestOptimizationFlakyTestsManagementPoliciesDisabledFailureRateRule",
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
    return TestOptimizationFlakyTestsManagementPoliciesDisabled.attributeTypeMap;
  }

  public constructor() {}
}
