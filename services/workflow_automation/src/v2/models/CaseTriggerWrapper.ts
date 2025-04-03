import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseTrigger } from "./CaseTrigger";

/**
 * Schema for a Case-based trigger.
 */
export class CaseTriggerWrapper {
  /**
   * Trigger a workflow from a Case. For automatic triggering a handle must be configured and the workflow must be published.
   */
  "caseTrigger": CaseTrigger;
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
    caseTrigger: {
      baseName: "caseTrigger",
      type: "CaseTrigger",
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
    return CaseTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
