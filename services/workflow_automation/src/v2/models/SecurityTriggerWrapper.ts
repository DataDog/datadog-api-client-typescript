import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityTrigger } from "./SecurityTrigger";

/**
 * Schema for a Security-based trigger.
 */
export class SecurityTriggerWrapper {
  /**
   * Trigger a workflow from a Security Signal or Finding. For automatic triggering a handle must be configured and the workflow must be published.
   */
  "securityTrigger": SecurityTrigger;
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
    securityTrigger: {
      baseName: "securityTrigger",
      type: "SecurityTrigger",
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
    return SecurityTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
