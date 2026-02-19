import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SlackRoutingOptions } from "./SlackRoutingOptions";

/**
 * Entity owner and Slack destination for team reports.
 */
export class EntityOwnerDestination {
  /**
   * Slack routing options for report delivery.
   */
  "slack": SlackRoutingOptions;
  /**
   * Team UUID.
   */
  "teamId": string;
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
    slack: {
      baseName: "slack",
      type: "SlackRoutingOptions",
      required: true,
    },
    teamId: {
      baseName: "team_id",
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
    return EntityOwnerDestination.attributeTypeMap;
  }

  public constructor() {}
}
