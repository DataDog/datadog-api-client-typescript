import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * MS Teams notification settings for the team
 */
export class TeamNotificationRuleAttributesMsTeams {
  /**
   * Handle for MS Teams
   */
  "connectorName"?: string;
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
    connectorName: {
      baseName: "connector_name",
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
    return TeamNotificationRuleAttributesMsTeams.attributeTypeMap;
  }

  public constructor() {}
}
