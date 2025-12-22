import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamNotificationRule } from "./TeamNotificationRule";
import { TeamNotificationRulesResponseMeta } from "./TeamNotificationRulesResponseMeta";

/**
 * Team notification rules response
 */
export class TeamNotificationRulesResponse {
  /**
   * Team notification rules response data
   */
  "data"?: Array<TeamNotificationRule>;
  /**
   * Metadata related to paging information that is included in the response when querying the team notification rules
   */
  "meta"?: TeamNotificationRulesResponseMeta;
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
      type: "Array<TeamNotificationRule>",
    },
    meta: {
      baseName: "meta",
      type: "TeamNotificationRulesResponseMeta",
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
    return TeamNotificationRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
