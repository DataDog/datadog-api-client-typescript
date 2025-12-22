import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamNotificationRuleAttributes } from "./TeamNotificationRuleAttributes";

/**
 * Team notification rule
 */
export class TeamNotificationRule {
  /**
   * Team notification rule attributes
   */
  "attributes"?: TeamNotificationRuleAttributes;
  /**
   * The identifier of the team notification rule
   */
  "id"?: string;
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
      type: "TeamNotificationRuleAttributes",
    },
    id: {
      baseName: "id",
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
    return TeamNotificationRule.attributeTypeMap;
  }

  public constructor() {}
}
