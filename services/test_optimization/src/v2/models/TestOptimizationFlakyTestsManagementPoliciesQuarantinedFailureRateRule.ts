import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Failure-rate-based rule for the quarantined policy.
 */
export class TestOptimizationFlakyTestsManagementPoliciesQuarantinedFailureRateRule {
  /**
   * List of branches to which this rule applies.
   */
  "branches"?: Array<string>;
  /**
   * Whether this failure rate rule is enabled.
   */
  "enabled"?: boolean;
  /**
   * Minimum number of runs required before the rule is evaluated. Must be greater than or equal to 0.
   */
  "minRuns"?: number;
  /**
   * Failure rate threshold (0.0–1.0) above which the rule triggers.
   */
  "threshold"?: number;
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
    branches: {
      baseName: "branches",
      type: "Array<string>",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    minRuns: {
      baseName: "min_runs",
      type: "number",
      format: "int64",
    },
    threshold: {
      baseName: "threshold",
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
    return TestOptimizationFlakyTestsManagementPoliciesQuarantinedFailureRateRule.attributeTypeMap;
  }

  public constructor() {}
}
