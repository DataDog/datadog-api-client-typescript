import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An empty object indicating the hash action
 */
export class CloudWorkloadSecurityAgentRuleActionHash {
  /**
   * Event field to use for the hash computation.
   */
  "field"?: string;
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
    field: {
      baseName: "field",
      type: "string",
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
    return CloudWorkloadSecurityAgentRuleActionHash.attributeTypeMap;
  }

  public constructor() {}
}
