import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TestOptimizationFlakyTestsManagementPoliciesAutoQuarantineRule } from "./TestOptimizationFlakyTestsManagementPoliciesAutoQuarantineRule";
import { TestOptimizationFlakyTestsManagementPoliciesBranchRule } from "./TestOptimizationFlakyTestsManagementPoliciesBranchRule";
import { TestOptimizationFlakyTestsManagementPoliciesQuarantinedFailureRateRule } from "./TestOptimizationFlakyTestsManagementPoliciesQuarantinedFailureRateRule";

/**
 * Configuration for the quarantined Flaky Tests Management policy.
 */
export class TestOptimizationFlakyTestsManagementPoliciesQuarantined {
  /**
   * Automatic quarantine triggering rule based on a time window.
   */
  "autoQuarantineRule"?: TestOptimizationFlakyTestsManagementPoliciesAutoQuarantineRule;
  /**
   * Branch filtering rule for a Flaky Tests Management policy.
   */
  "branchRule"?: TestOptimizationFlakyTestsManagementPoliciesBranchRule;
  /**
   * Whether the quarantined policy is enabled.
   */
  "enabled"?: boolean;
  /**
   * Failure-rate-based rule for the quarantined policy.
   */
  "failureRateRule"?: TestOptimizationFlakyTestsManagementPoliciesQuarantinedFailureRateRule;
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
    autoQuarantineRule: {
      baseName: "auto_quarantine_rule",
      type: "TestOptimizationFlakyTestsManagementPoliciesAutoQuarantineRule",
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
      type: "TestOptimizationFlakyTestsManagementPoliciesQuarantinedFailureRateRule",
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
    return TestOptimizationFlakyTestsManagementPoliciesQuarantined.attributeTypeMap;
  }

  public constructor() {}
}
