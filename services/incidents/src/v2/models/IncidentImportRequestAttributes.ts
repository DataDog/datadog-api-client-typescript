import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentImportFieldAttributes } from "./IncidentImportFieldAttributes";
import { IncidentImportVisibility } from "./IncidentImportVisibility";

/**
 * The incident's attributes for an import request.
 */
export class IncidentImportRequestAttributes {
  /**
   * Timestamp when the incident was declared.
   */
  "declared"?: Date;
  /**
   * Timestamp when the incident was detected.
   */
  "detected"?: Date;
  /**
   * A condensed view of the user-defined fields for which to create initial selections.
   */
  "fields"?: { [key: string]: IncidentImportFieldAttributes };
  /**
   * A unique identifier that represents the incident type. If not provided, the default incident type is used.
   */
  "incidentTypeUuid"?: string;
  /**
   * Timestamp when the incident was resolved. Can only be set when the state field is set to 'resolved'.
   */
  "resolved"?: Date;
  /**
   * The title of the incident that summarizes what happened.
   */
  "title": string;
  /**
   * The visibility of the incident.
   */
  "visibility"?: IncidentImportVisibility;
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
    declared: {
      baseName: "declared",
      type: "Date",
      format: "date-time",
    },
    detected: {
      baseName: "detected",
      type: "Date",
      format: "date-time",
    },
    fields: {
      baseName: "fields",
      type: "{ [key: string]: IncidentImportFieldAttributes; }",
    },
    incidentTypeUuid: {
      baseName: "incident_type_uuid",
      type: "string",
    },
    resolved: {
      baseName: "resolved",
      type: "Date",
      format: "date-time",
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    visibility: {
      baseName: "visibility",
      type: "IncidentImportVisibility",
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
    return IncidentImportRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
