import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentSavedTrigger } from "./IncidentSavedTrigger";

/**
 * Schema for an incident declared or updated trigger.
 */
export class IncidentSavedTriggerWrapper {
  /**
   * Trigger a workflow when an incident is declared or updated.
   */
  "incidentSavedTrigger": IncidentSavedTrigger;
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
    incidentSavedTrigger: {
      baseName: "incidentSavedTrigger",
      type: "IncidentSavedTrigger",
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
    return IncidentSavedTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
