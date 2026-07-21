import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an incident org settings resource in a response.
 */
export class IncidentOrgSettingsDataAttributesResponse {
  /**
   * Timestamp when the settings were created.
   */
  "created": Date;
  /**
   * Timestamp when the settings were last modified.
   */
  "modified": Date;
  /**
   * The settings configuration for an incident org settings resource.
   */
  "settings": { [key: string]: any };
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
      required: true,
      format: "date-time",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      required: true,
      format: "date-time",
    },
    settings: {
      baseName: "settings",
      type: "{ [key: string]: any; }",
      required: true,
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
    return IncidentOrgSettingsDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
