import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentScheduleTrigger } from "./IncidentScheduleTrigger";

/**
 * Schema for an Incident Schedule-based trigger.
 */
export class IncidentScheduleTriggerWrapper {
  /**
   * Trigger a workflow from an Incident Schedule. The workflow must be published.
   */
  "incidentScheduleTrigger": IncidentScheduleTrigger;
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
    incidentScheduleTrigger: {
      baseName: "incidentScheduleTrigger",
      type: "IncidentScheduleTrigger",
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
    return IncidentScheduleTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
