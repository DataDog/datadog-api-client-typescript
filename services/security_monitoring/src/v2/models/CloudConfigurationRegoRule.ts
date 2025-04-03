import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Rule details.
 */
export class CloudConfigurationRegoRule {
  /**
   * The policy written in `rego`, see: https://www.openpolicyagent.org/docs/latest/policy-language/
   */
  "policy": string;
  /**
   * List of resource types that will be evaluated upon. Must have at least one element.
   */
  "resourceTypes": Array<string>;
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
    policy: {
      baseName: "policy",
      type: "string",
      required: true,
    },
    resourceTypes: {
      baseName: "resourceTypes",
      type: "Array<string>",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudConfigurationRegoRule.attributeTypeMap;
  }

  public constructor() {}
}
