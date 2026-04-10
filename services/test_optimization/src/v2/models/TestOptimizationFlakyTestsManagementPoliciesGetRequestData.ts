import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TestOptimizationFlakyTestsManagementPoliciesGetRequestAttributes } from "./TestOptimizationFlakyTestsManagementPoliciesGetRequestAttributes";
import { TestOptimizationGetFlakyTestsManagementPoliciesRequestDataType } from "./TestOptimizationGetFlakyTestsManagementPoliciesRequestDataType";

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
