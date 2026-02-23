import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormTrigger } from "./FormTrigger";

/**
 * Schema for a Form-based trigger.
 */
export class FormTriggerWrapper {
  /**
   * Trigger a workflow from a Form.
   */
  "formTrigger": FormTrigger;
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
    formTrigger: {
      baseName: "formTrigger",
      type: "FormTrigger",
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
    return FormTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
