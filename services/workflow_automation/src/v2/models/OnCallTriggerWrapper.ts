import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallTrigger } from "./OnCallTrigger";

/**
 * Schema for an On-Call-based trigger.
 */
export class OnCallTriggerWrapper {
  /**
   * Trigger a workflow from an On-Call Page or On-Call Handover. For automatic triggering a handle must be configured and the workflow must be published.
   */
  "onCallTrigger": OnCallTrigger;
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
    onCallTrigger: {
      baseName: "onCallTrigger",
      type: "OnCallTrigger",
      required: true,
    },
    startStepNames: {
      baseName: "startStepNames",
      type: "Array<string>",
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
    return OnCallTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
