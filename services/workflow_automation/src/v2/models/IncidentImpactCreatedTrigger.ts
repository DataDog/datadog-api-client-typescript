import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionLimit } from "./ExecutionLimit";
import { IncidentCondition } from "./IncidentCondition";
import { IncidentTriggerIncidentType } from "./IncidentTriggerIncidentType";

/**
 * Trigger a workflow when an impact is created for an incident.
 */
export class IncidentImpactCreatedTrigger {
  /**
   * The maximum number of times to execute a workflow for an incident.
   */
  "executionLimit"?: ExecutionLimit;
  /**
   * Deprecated. Use `incidentTypes` instead. The type of incident that triggers the workflow.
   */
  "incidentType"?: string;
  /**
   * The types of incident that trigger the workflow.
   */
  "incidentTypes"?: Array<IncidentTriggerIncidentType>;
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
    executionLimit: {
      baseName: "executionLimit",
      type: "ExecutionLimit",
    },
    incidentType: {
      baseName: "incidentType",
      type: "string",
    },
    incidentTypes: {
      baseName: "incidentTypes",
      type: "Array<IncidentTriggerIncidentType>",
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
    return IncidentImpactCreatedTrigger.attributeTypeMap;
  }

  public constructor() {}
}
