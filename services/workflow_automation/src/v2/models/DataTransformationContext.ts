import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class DataTransformationContext {
  /**
   * Available context variables for the transformation.
   */
  "contextVariables": string;
  /**
   * The current script to modify or enhance.
   */
  "currentScript": string;
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
    contextVariables: {
      baseName: "contextVariables",
      type: "string",
      required: true,
    },
    currentScript: {
      baseName: "currentScript",
      type: "string",
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
    return DataTransformationContext.attributeTypeMap;
  }

  public constructor() {}
}
