import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for a Slack emoji reaction trigger.
 */
export class SlackReactionConfig {
  /**
   * The Slack emoji reaction name.
   */
  "reactionEmoji": string;
  /**
   * The Slack workspace ID.
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
    reactionEmoji: {
      baseName: "reactionEmoji",
      type: "string",
      required: true,
    },
    teamId: {
      baseName: "teamId",
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
    return SlackReactionConfig.attributeTypeMap;
  }

  public constructor() {}
}
