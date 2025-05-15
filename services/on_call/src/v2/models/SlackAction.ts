import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Sends a message to a Slack channel.
 */
export class SlackAction {
  /**
   * The channel ID.
   */
  "channel": string;
  /**
   * Must be set to "send_slack_message".
   */
  "type": string;
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
      type: "string",
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
    return SlackAction.attributeTypeMap;
  }

  public constructor() {}
}
