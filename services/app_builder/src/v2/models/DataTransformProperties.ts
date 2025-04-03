import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The properties of the data transformer.
 */
export class DataTransformProperties {
  /**
   * A JavaScript function that returns the transformed data.
   */
  "outputs"?: string;
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
    outputs: {
      baseName: "outputs",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DataTransformProperties.attributeTypeMap;
  }

  public constructor() {}
}
