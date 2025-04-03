import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Schema for a Slack-based trigger.
 */
export class SlackTriggerWrapper {
  /**
   * Trigger a workflow from Slack. The workflow must be published.
   */
  "slackTrigger": any;
  /**
   * A list of steps that run first after a trigger fires.
   */
  "startStepNames"?: Array<string>;
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
    slackTrigger: {
      baseName: "slackTrigger",
      type: "any",
      required: true,
    },
    startStepNames: {
      baseName: "startStepNames",
      type: "Array<string>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SlackTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
