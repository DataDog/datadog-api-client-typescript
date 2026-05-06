import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TriggerWorkflowAutomationActionType } from "./TriggerWorkflowAutomationActionType";

/**
 * Triggers a Workflow Automation.
 */
export class TriggerWorkflowAutomationAction {
  /**
   * The handle of the Workflow Automation to trigger.
   */
  "handle": string;
  /**
   * Indicates that the action triggers a Workflow Automation.
   */
  "type": TriggerWorkflowAutomationActionType;
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
    handle: {
      baseName: "handle",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TriggerWorkflowAutomationActionType",
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
    return TriggerWorkflowAutomationAction.attributeTypeMap;
  }

  public constructor() {}
}
