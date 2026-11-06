import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCondition } from "./IncidentCondition";

/**
 * Trigger a workflow when an incident is declared.
 */
export class IncidentCreatedTrigger {
  /**
   * The type of incident that triggers the workflow. Deprecated. Use `incidentTypes` instead.
   */
  "incidentType"?: string;
  /**
   * The types of incidents that trigger the workflow.
   */
  "incidentTypes"?: Array<string>;
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
    incidentTypes: {
      baseName: "incidentTypes",
      type: "Array<string>",
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
    return IncidentCreatedTrigger.attributeTypeMap;
  }

  public constructor() {}
}
