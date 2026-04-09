/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Branch filtering rule for a Flaky Tests Management policy.
 */
export class TestOptimizationFlakyTestsManagementPoliciesBranchRule {
  /**
   * List of branches to which the policy applies.
   */
  "branches"?: Array<string>;
  /**
   * Whether this branch rule is enabled.
   */
  "enabled"?: boolean;
  /**
   * List of branches excluded from the policy.
   */
  "excludedBranches"?: Array<string>;
  /**
   * List of test services excluded from the policy.
   */
  "excludedTestServices"?: Array<string>;

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
    excludedBranches: {
      baseName: "excluded_branches",
      type: "Array<string>",
    },
    excludedTestServices: {
      baseName: "excluded_test_services",
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
    return TestOptimizationFlakyTestsManagementPoliciesBranchRule.attributeTypeMap;
  }

  public constructor() {}
}
