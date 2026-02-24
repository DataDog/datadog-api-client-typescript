import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A field with potentially multiple values selected.
 */
export class IncidentImportFieldAttributesMultipleValue {
  /**
   * The multiple values selected for this field.
   */
  "value"?: Array<string>;
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
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentImportFieldAttributesMultipleValue.attributeTypeMap;
  }

  public constructor() {}
}
