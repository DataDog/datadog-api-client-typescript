import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Slack routing options for report delivery.
 */
export class SlackRoutingOptions {
  /**
   * Slack channel ID.
   */
  "channelId"?: string;
  /**
   * Slack channel name.
   */
  "channelName"?: string;
  /**
   * Slack workspace ID.
   */
  "workspaceId"?: string;
  /**
   * Slack workspace name.
   */
  "workspaceName"?: string;
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
    channelId: {
      baseName: "channel_id",
      type: "string",
    },
    channelName: {
      baseName: "channel_name",
      type: "string",
    },
    workspaceId: {
      baseName: "workspace_id",
      type: "string",
    },
    workspaceName: {
      baseName: "workspace_name",
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
    return SlackRoutingOptions.attributeTypeMap;
  }

  public constructor() {}
}
