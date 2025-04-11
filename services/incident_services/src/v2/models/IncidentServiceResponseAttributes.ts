import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The incident service's attributes from a response.
 */
export class IncidentServiceResponseAttributes {
  /**
   * Timestamp of when the incident service was created.
   */
  "created"?: Date;
  /**
   * Timestamp of when the incident service was modified.
   */
  "modified"?: Date;
  /**
   * Name of the incident service.
   */
  "name"?: string;
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
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return IncidentServiceResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
