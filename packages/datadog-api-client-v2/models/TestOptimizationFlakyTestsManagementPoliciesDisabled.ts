/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TestOptimizationFlakyTestsManagementPoliciesAutoDisableRule } from "./TestOptimizationFlakyTestsManagementPoliciesAutoDisableRule";
import { TestOptimizationFlakyTestsManagementPoliciesBranchRule } from "./TestOptimizationFlakyTestsManagementPoliciesBranchRule";
import { TestOptimizationFlakyTestsManagementPoliciesDisabledFailureRateRule } from "./TestOptimizationFlakyTestsManagementPoliciesDisabledFailureRateRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
