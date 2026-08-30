import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SlackReactionConfig } from "./SlackReactionConfig";

/**
 * Trigger a workflow from Slack. The workflow must be published.
 */
export class SlackTrigger {
  /**
   * Slack emoji reactions that trigger the workflow.
   */
  "reactionTriggers"?: Array<SlackReactionConfig>;
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
    reactionTriggers: {
      baseName: "reactionTriggers",
      type: "Array<SlackReactionConfig>",
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
    return SlackTrigger.attributeTypeMap;
  }

  public constructor() {}
}
