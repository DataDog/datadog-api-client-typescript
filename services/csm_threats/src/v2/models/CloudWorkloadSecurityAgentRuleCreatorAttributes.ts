import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes of the user who created the Agent rule.
 */
export class CloudWorkloadSecurityAgentRuleCreatorAttributes {
  /**
   * The handle of the user.
   */
  "handle"?: string;
  /**
   * The name of the user.
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudWorkloadSecurityAgentRuleCreatorAttributes.attributeTypeMap;
  }

  public constructor() {}
}
