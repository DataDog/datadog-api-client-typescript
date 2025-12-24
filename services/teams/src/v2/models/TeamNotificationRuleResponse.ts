import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamNotificationRule } from "./TeamNotificationRule";

/**
 * Team notification rule response
 */
export class TeamNotificationRuleResponse {
  /**
   * Team notification rule
   */
  "data"?: TeamNotificationRule;
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
      type: "TeamNotificationRule",
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
    return TeamNotificationRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
