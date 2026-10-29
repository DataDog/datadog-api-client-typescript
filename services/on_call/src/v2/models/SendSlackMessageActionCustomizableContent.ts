import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Options that customize the content of the Slack message sent for a Page.
 */
export class SendSlackMessageActionCustomizableContent {
  /**
   * Whether to include the Page description in the Slack message.
   */
  "includeDescription"?: boolean;
  /**
   * Whether to include the source that triggered the Page in the Slack message.
   */
  "includeSource"?: boolean;
  /**
   * Whether to mirror replies posted in the Slack message thread to the Page timeline.
   */
  "mirrorReplies"?: boolean;
  /**
   * Whether to post Page timeline updates as replies in the Slack message thread.
   */
  "threadTimeline"?: boolean;
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
    includeDescription: {
      baseName: "include_description",
      type: "boolean",
    },
    includeSource: {
      baseName: "include_source",
      type: "boolean",
    },
    mirrorReplies: {
      baseName: "mirror_replies",
      type: "boolean",
    },
    threadTimeline: {
      baseName: "thread_timeline",
      type: "boolean",
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
    return SendSlackMessageActionCustomizableContent.attributeTypeMap;
  }

  public constructor() {}
}
