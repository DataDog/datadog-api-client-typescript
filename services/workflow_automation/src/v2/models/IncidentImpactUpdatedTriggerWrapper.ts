import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentImpactUpdatedTrigger } from "./IncidentImpactUpdatedTrigger";

/**
 * Schema for an incident impact updated trigger.
 */
export class IncidentImpactUpdatedTriggerWrapper {
  /**
   * Trigger a workflow when an impact is updated for an incident.
   */
  "incidentImpactUpdatedTrigger": IncidentImpactUpdatedTrigger;
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
    incidentImpactUpdatedTrigger: {
      baseName: "incidentImpactUpdatedTrigger",
      type: "IncidentImpactUpdatedTrigger",
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
    return IncidentImpactUpdatedTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
