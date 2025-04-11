import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Incident type's attributes for updates.
 */
export class IncidentTypeUpdateAttributes {
  /**
   * Timestamp when the incident type was created.
   */
  "createdAt"?: Date;
  /**
   * A unique identifier that represents the user that created the incident type.
   */
  "createdBy"?: string;
  /**
   * Text that describes the incident type.
   */
  "description"?: string;
  /**
   * When true, this incident type will be used as the default type when an incident type is not specified.
   */
  "isDefault"?: boolean;
  /**
   * A unique identifier that represents the user that last modified the incident type.
   */
  "lastModifiedBy"?: string;
  /**
   * Timestamp when the incident type was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * The name of the incident type.
   */
  "name"?: string;
  /**
   * The string that will be prepended to the incident title across the Datadog app.
   */
  "prefix"?: string;
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
      baseName: "createdAt",
      type: "Date",
      format: "date-time",
    },
    createdBy: {
      baseName: "createdBy",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    isDefault: {
      baseName: "is_default",
      type: "boolean",
    },
    lastModifiedBy: {
      baseName: "lastModifiedBy",
      type: "string",
    },
    modifiedAt: {
      baseName: "modifiedAt",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    prefix: {
      baseName: "prefix",
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
    return IncidentTypeUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
