import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes that can be updated on a maintenance window. All fields are optional; only provided fields are changed.
 */
export class MaintenanceWindowUpdateAttributes {
  /**
   * The end time of the maintenance window.
   */
  "endAt"?: Date;
  /**
   * The name of the maintenance window.
   */
  "name"?: string;
  /**
   * The query to filter event management cases for this maintenance window.
   */
  "query"?: string;
  /**
   * The start time of the maintenance window.
   */
  "startAt"?: Date;
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
    endAt: {
      baseName: "end_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    startAt: {
      baseName: "start_at",
      type: "Date",
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
    return MaintenanceWindowUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
