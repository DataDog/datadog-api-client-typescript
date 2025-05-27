import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SendTeamsMessageActionType } from "./SendTeamsMessageActionType";

/**
 * Sends a message to a Microsoft Teams channel.
 */
export class SendTeamsMessageAction {
  /**
   * The channel ID.
   */
  "channel": string;
  /**
   * The team ID.
   */
  "team": string;
  /**
   * The tenant ID.
   */
  "tenant": string;
  /**
   * Indicates that the action is a send Microsoft Teams message action.
   */
  "type": SendTeamsMessageActionType;
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
    channel: {
      baseName: "channel",
      type: "string",
      required: true,
    },
    team: {
      baseName: "team",
      type: "string",
      required: true,
    },
    tenant: {
      baseName: "tenant",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SendTeamsMessageActionType",
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
    return SendTeamsMessageAction.attributeTypeMap;
  }

  public constructor() {}
}
