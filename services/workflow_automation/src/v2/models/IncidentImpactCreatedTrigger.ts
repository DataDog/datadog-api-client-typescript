import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionLimit } from "./ExecutionLimit";
import { IncidentCondition } from "./IncidentCondition";

/**
 * Trigger a workflow when an impact is created for an incident.
 */
export class IncidentImpactCreatedTrigger {
  /**
   * The maximum number of times to execute a workflow for an incident.
   */
  "executionLimit"?: ExecutionLimit;
  /**
   * The type of incident that triggers the workflow.
   */
  "incidentType"?: string;
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
