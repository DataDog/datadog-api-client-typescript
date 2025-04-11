import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTrigger } from "./IncidentTrigger";

/**
 * Schema for an Incident-based trigger.
 */
export class IncidentTriggerWrapper {
  /**
   * Trigger a workflow from an Incident. For automatic triggering a handle must be configured and the workflow must be published.
   */
  "incidentTrigger": IncidentTrigger;
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
    incidentTrigger: {
      baseName: "incidentTrigger",
      type: "IncidentTrigger",
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
    return IncidentTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
