import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TestOptimizationFlakyTestsManagementPoliciesAttemptToFix } from "./TestOptimizationFlakyTestsManagementPoliciesAttemptToFix";
import { TestOptimizationFlakyTestsManagementPoliciesDisabled } from "./TestOptimizationFlakyTestsManagementPoliciesDisabled";
import { TestOptimizationFlakyTestsManagementPoliciesQuarantined } from "./TestOptimizationFlakyTestsManagementPoliciesQuarantined";

/**
 * Attributes for updating Flaky Tests Management policies.
 * Only provided policy blocks are updated; omitted blocks are left unchanged.
 */
export class TestOptimizationFlakyTestsManagementPoliciesUpdateRequestAttributes {
  /**
   * Configuration for the attempt-to-fix Flaky Tests Management policy.
   */
  "attemptToFix"?: TestOptimizationFlakyTestsManagementPoliciesAttemptToFix;
  /**
   * Configuration for the disabled Flaky Tests Management policy.
   */
  "disabled"?: TestOptimizationFlakyTestsManagementPoliciesDisabled;
  /**
   * Configuration for the quarantined Flaky Tests Management policy.
   */
  "quarantined"?: TestOptimizationFlakyTestsManagementPoliciesQuarantined;
  /**
   * The repository identifier.
   */
  "repositoryId": string;
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
    attemptToFix: {
      baseName: "attempt_to_fix",
      type: "TestOptimizationFlakyTestsManagementPoliciesAttemptToFix",
    },
    disabled: {
      baseName: "disabled",
      type: "TestOptimizationFlakyTestsManagementPoliciesDisabled",
    },
    quarantined: {
      baseName: "quarantined",
      type: "TestOptimizationFlakyTestsManagementPoliciesQuarantined",
    },
    repositoryId: {
      baseName: "repository_id",
      type: "string",
      required: true,
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
    return TestOptimizationFlakyTestsManagementPoliciesUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
