import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes of the user who last updated the Agent rule
 */
export class CloudWorkloadSecurityAgentRuleUpdaterAttributes {
  /**
   * The handle of the user
   */
  "handle"?: string;
  /**
   * The name of the user
   */
  "name"?: string;
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
    handle: {
      baseName: "handle",
      type: "string",
    },
    name: {
      baseName: "name",
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
    return CloudWorkloadSecurityAgentRuleUpdaterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
