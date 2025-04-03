import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleTrigger } from "./ScheduleTrigger";

/**
 * Schema for a Schedule-based trigger.
 */
export class ScheduleTriggerWrapper {
  /**
   * Trigger a workflow from a Schedule. The workflow must be published.
   */
  "scheduleTrigger": ScheduleTrigger;
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
    scheduleTrigger: {
      baseName: "scheduleTrigger",
      type: "ScheduleTrigger",
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
    return ScheduleTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
