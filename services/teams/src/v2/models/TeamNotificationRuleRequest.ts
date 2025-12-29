import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamNotificationRule } from "./TeamNotificationRule";

/**
 * Request to create or update a team notification rule
 */
export class TeamNotificationRuleRequest {
  /**
   * Team notification rule
   */
  "data": TeamNotificationRule;
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
    return TeamNotificationRuleRequest.attributeTypeMap;
  }

  public constructor() {}
}
