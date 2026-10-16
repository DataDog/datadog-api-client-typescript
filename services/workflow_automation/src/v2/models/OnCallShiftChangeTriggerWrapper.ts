import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallShiftChangeTrigger } from "./OnCallShiftChangeTrigger";

/**
 * Schema for an On-Call shift change trigger.
 */
export class OnCallShiftChangeTriggerWrapper {
  /**
   * Trigger a workflow when an On-Call shift changes. The workflow must be published.
   */
  "onCallShiftChangeTrigger": OnCallShiftChangeTrigger;
  /**
   * Names of existing workflow steps that run first after a trigger fires.
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
    onCallShiftChangeTrigger: {
      baseName: "onCallShiftChangeTrigger",
      type: "OnCallShiftChangeTrigger",
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
    return OnCallShiftChangeTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
