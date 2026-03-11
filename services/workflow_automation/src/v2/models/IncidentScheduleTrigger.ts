import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCondition } from "./IncidentCondition";

/**
 * Trigger a workflow from an Incident Schedule. The workflow must be published.
 */
export class IncidentScheduleTrigger {
  /**
   * Incident type filter for the schedule.
   */
  "incidentType"?: string;
  /**
   * Recurrence rule expression for scheduling.
   */
  "rrule": string;
  /**
   * A condition evaluated against incident tags.
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
