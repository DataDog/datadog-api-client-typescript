import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A field with a single value selected.
 */
export class IncidentImportFieldAttributesSingleValue {
  /**
   * The single value selected for this field.
   */
  "value"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    value: {
      baseName: "value",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentImportFieldAttributesSingleValue.attributeTypeMap;
  }

  public constructor() {}
}
