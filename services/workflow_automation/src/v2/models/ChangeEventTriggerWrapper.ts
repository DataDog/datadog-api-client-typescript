import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Schema for a Change Event-based trigger.
 */
export class ChangeEventTriggerWrapper {
  /**
   * Trigger a workflow from a Change Event.
   */
  "changeEventTrigger": any;
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
    changeEventTrigger: {
      baseName: "changeEventTrigger",
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
    return ChangeEventTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
