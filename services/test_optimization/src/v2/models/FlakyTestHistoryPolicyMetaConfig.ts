import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration parameters of the policy that triggered this status change.
 */
export class FlakyTestHistoryPolicyMetaConfig {
  /**
   * The branches considered by the policy.
   */
  "branches"?: Array<string>;
  /**
   * The number of days a test must have been active for the policy to trigger.
   */
  "daysActive"?: number;
  /**
   * The failure rate threshold for the policy to trigger.
   */
  "failureRate"?: number;
  /**
   * Branches excluded from the policy evaluation.
   */
  "forgetBranches"?: Array<string>;
  /**
   * The minimum number of test runs required for the policy to trigger.
   */
  "requiredRuns"?: number;
  /**
   * The target state the policy transitions the test from.
   */
  "state"?: string;
  /**
   * Test services excluded from the policy evaluation.
   */
  "testServices"?: Array<string>;
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
    daysActive: {
      baseName: "days_active",
      type: "number",
      format: "int32",
    },
    failureRate: {
      baseName: "failure_rate",
      type: "number",
      format: "double",
    },
    forgetBranches: {
      baseName: "forget_branches",
      type: "Array<string>",
    },
    requiredRuns: {
      baseName: "required_runs",
      type: "number",
      format: "int32",
    },
    state: {
      baseName: "state",
      type: "string",
    },
    testServices: {
      baseName: "test_services",
      type: "Array<string>",
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
    return FlakyTestHistoryPolicyMetaConfig.attributeTypeMap;
  }

  public constructor() {}
}
