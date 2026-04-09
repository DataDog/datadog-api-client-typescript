/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TestOptimizationFlakyTestsManagementPoliciesUpdateRequestAttributes } from "./TestOptimizationFlakyTestsManagementPoliciesUpdateRequestAttributes";
import { TestOptimizationUpdateFlakyTestsManagementPoliciesRequestDataType } from "./TestOptimizationUpdateFlakyTestsManagementPoliciesRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for update Flaky Tests Management policies request.
 */
export class TestOptimizationFlakyTestsManagementPoliciesUpdateRequestData {
  /**
   * Attributes for updating Flaky Tests Management policies.
   * Only provided policy blocks are updated; omitted blocks are left unchanged.
   */
  "attributes": TestOptimizationFlakyTestsManagementPoliciesUpdateRequestAttributes;
  /**
   * JSON:API type for update Flaky Tests Management policies request.
   * The value must always be `test_optimization_update_flaky_tests_management_policies_request`.
   */
  "type": TestOptimizationUpdateFlakyTestsManagementPoliciesRequestDataType;

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
    attributes: {
      baseName: "attributes",
      type: "TestOptimizationFlakyTestsManagementPoliciesUpdateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TestOptimizationUpdateFlakyTestsManagementPoliciesRequestDataType",
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
    return TestOptimizationFlakyTestsManagementPoliciesUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
