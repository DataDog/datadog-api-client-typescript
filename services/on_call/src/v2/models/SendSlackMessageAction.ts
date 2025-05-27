import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SendSlackMessageActionType } from "./SendSlackMessageActionType";

/**
 * Sends a message to a Slack channel.
 */
export class SendSlackMessageAction {
  /**
   * The channel ID.
   */
  "channel": string;
  /**
   * Indicates that the action is a send Slack message action.
   */
  "type": SendSlackMessageActionType;
  /**
   * The workspace ID.
   */
  "workspace": string;
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
    type: {
      baseName: "type",
      type: "SendSlackMessageActionType",
      required: true,
    },
    workspace: {
      baseName: "workspace",
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
    return SendSlackMessageAction.attributeTypeMap;
  }

  public constructor() {}
}
