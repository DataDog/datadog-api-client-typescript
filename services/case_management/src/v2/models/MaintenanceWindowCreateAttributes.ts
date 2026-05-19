import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes required to create a maintenance window.
 */
export class MaintenanceWindowCreateAttributes {
  /**
   * The end time of the maintenance window.
   */
  "endAt": Date;
  /**
   * The name of the maintenance window.
   */
  "name": string;
  /**
   * The query to filter event management cases for this maintenance window.
   */
  "query": string;
  /**
   * The start time of the maintenance window.
   */
  "startAt": Date;
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
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    startAt: {
      baseName: "start_at",
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
    return MaintenanceWindowCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
