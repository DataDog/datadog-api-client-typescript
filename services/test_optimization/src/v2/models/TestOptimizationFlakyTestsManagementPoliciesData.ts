import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TestOptimizationFlakyTestsManagementPoliciesAttributes } from "./TestOptimizationFlakyTestsManagementPoliciesAttributes";
import { TestOptimizationFlakyTestsManagementPoliciesType } from "./TestOptimizationFlakyTestsManagementPoliciesType";

/**
 * Data object for Flaky Tests Management policies response.
 */
export class TestOptimizationFlakyTestsManagementPoliciesData {
  /**
   * Attributes of the Flaky Tests Management policies for a repository.
   */
  "attributes"?: TestOptimizationFlakyTestsManagementPoliciesAttributes;
  /**
   * The repository identifier used as the resource ID.
   */
  "id"?: string;
  /**
   * JSON:API type for Flaky Tests Management policies response.
   * The value must always be `test_optimization_flaky_tests_management_policies`.
   */
  "type"?: TestOptimizationFlakyTestsManagementPoliciesType;
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
      type: "TestOptimizationFlakyTestsManagementPoliciesAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TestOptimizationFlakyTestsManagementPoliciesType",
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
    return TestOptimizationFlakyTestsManagementPoliciesData.attributeTypeMap;
  }

  public constructor() {}
}
