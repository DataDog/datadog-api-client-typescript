import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentPostmortemUpdatedTrigger } from "./IncidentPostmortemUpdatedTrigger";

/**
 * Schema for an incident postmortem updated trigger.
 */
export class IncidentPostmortemUpdatedTriggerWrapper {
  /**
   * Trigger a workflow when a postmortem is updated for an incident.
   */
  "incidentPostmortemUpdatedTrigger": IncidentPostmortemUpdatedTrigger;
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
    incidentPostmortemUpdatedTrigger: {
      baseName: "incidentPostmortemUpdatedTrigger",
      type: "IncidentPostmortemUpdatedTrigger",
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
    return IncidentPostmortemUpdatedTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
