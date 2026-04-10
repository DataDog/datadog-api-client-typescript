/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TestOptimizationFlakyTestsManagementPoliciesGetRequestAttributes } from "./TestOptimizationFlakyTestsManagementPoliciesGetRequestAttributes";
import { TestOptimizationGetFlakyTestsManagementPoliciesRequestDataType } from "./TestOptimizationGetFlakyTestsManagementPoliciesRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for get Flaky Tests Management policies request.
 */
export class TestOptimizationFlakyTestsManagementPoliciesGetRequestData {
  /**
   * Attributes for requesting Flaky Tests Management policies.
   */
  "attributes": TestOptimizationFlakyTestsManagementPoliciesGetRequestAttributes;
  /**
   * JSON:API type for get Flaky Tests Management policies request.
   * The value must always be `test_optimization_get_flaky_tests_management_policies_request`.
   */
  "type": TestOptimizationGetFlakyTestsManagementPoliciesRequestDataType;

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
      type: "TestOptimizationFlakyTestsManagementPoliciesGetRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TestOptimizationGetFlakyTestsManagementPoliciesRequestDataType",
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
    return TestOptimizationFlakyTestsManagementPoliciesGetRequestData.attributeTypeMap;
  }

  public constructor() {}
}
