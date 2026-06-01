import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTimestampType } from "./IncidentTimestampType";

/**
 * Attributes of a timestamp override in a response.
 */
export class IncidentTimestampOverrideDataAttributesResponse {
  /**
   * Timestamp when the override was created.
   */
  "createdAt": Date;
  /**
   * Timestamp when the override was deleted.
   */
  "deletedAt"?: Date;
  /**
   * The incident identifier.
   */
  "incidentId": string;
  /**
   * Timestamp when the override was last modified.
   */
  "modifiedAt": Date;
  /**
   * The type of timestamp to override.
   */
  "timestampType": IncidentTimestampType;
  /**
   * The overridden timestamp value.
   */
  "timestampValue": Date;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      format: "date-time",
    },
    incidentId: {
      baseName: "incident_id",
      type: "string",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    timestampType: {
      baseName: "timestamp_type",
      type: "IncidentTimestampType",
      required: true,
    },
    timestampValue: {
      baseName: "timestamp_value",
      type: "Date",
      required: true,
      format: "date-time",
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
    return IncidentTimestampOverrideDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
