import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCondition } from "./IncidentCondition";

/**
 * Trigger a workflow on a schedule for an incident.
 */
export class IncidentScheduleTrigger {
  /**
   * The type of incident that triggers the workflow.
   */
  "incidentType"?: string;
  /**
   * The recurrence rule for the schedule, expressed as an iCalendar `RRULE` string.
   */
  "rrule": string;
  /**
   * Conditions that determine which incidents trigger the workflow.
   */
  "tagCondition"?: IncidentCondition;
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
    incidentType: {
      baseName: "incidentType",
      type: "string",
    },
    rrule: {
      baseName: "rrule",
      type: "string",
      required: true,
    },
    tagCondition: {
      baseName: "tagCondition",
      type: "IncidentCondition",
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
    return IncidentScheduleTrigger.attributeTypeMap;
  }

  public constructor() {}
}
