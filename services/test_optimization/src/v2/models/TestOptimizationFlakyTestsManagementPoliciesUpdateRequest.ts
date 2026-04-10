import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TestOptimizationFlakyTestsManagementPoliciesUpdateRequestData } from "./TestOptimizationFlakyTestsManagementPoliciesUpdateRequestData";

/**
 * Request object for updating Flaky Tests Management policies.
 */
export class TestOptimizationFlakyTestsManagementPoliciesUpdateRequest {
  /**
   * Data object for update Flaky Tests Management policies request.
   */
  "data": TestOptimizationFlakyTestsManagementPoliciesUpdateRequestData;
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
      type: "TestOptimizationFlakyTestsManagementPoliciesUpdateRequestData",
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
    return TestOptimizationFlakyTestsManagementPoliciesUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
