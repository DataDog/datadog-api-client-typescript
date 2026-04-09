import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TestOptimizationFlakyTestsManagementPoliciesData } from "./TestOptimizationFlakyTestsManagementPoliciesData";

/**
 * Response object containing Flaky Tests Management policies for a repository.
 */
export class TestOptimizationFlakyTestsManagementPoliciesResponse {
  /**
   * Data object for Flaky Tests Management policies response.
   */
  "data"?: TestOptimizationFlakyTestsManagementPoliciesData;
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
    data: {
      baseName: "data",
      type: "TestOptimizationFlakyTestsManagementPoliciesData",
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
    return TestOptimizationFlakyTestsManagementPoliciesResponse.attributeTypeMap;
  }

  public constructor() {}
}
