import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponderCreatedTrigger } from "./IncidentResponderCreatedTrigger";

/**
 * Schema for an incident responder created trigger.
 */
export class IncidentResponderCreatedTriggerWrapper {
  /**
   * Trigger a workflow when a responder is created for an incident.
   */
  "incidentResponderCreatedTrigger": IncidentResponderCreatedTrigger;
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
    incidentResponderCreatedTrigger: {
      baseName: "incidentResponderCreatedTrigger",
      type: "IncidentResponderCreatedTrigger",
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
    return IncidentResponderCreatedTriggerWrapper.attributeTypeMap;
  }

  public constructor() {}
}
