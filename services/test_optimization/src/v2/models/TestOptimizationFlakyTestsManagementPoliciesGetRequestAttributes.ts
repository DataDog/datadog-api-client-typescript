import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for requesting Flaky Tests Management policies.
 */
export class TestOptimizationFlakyTestsManagementPoliciesGetRequestAttributes {
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
    return TestOptimizationFlakyTestsManagementPoliciesGetRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
