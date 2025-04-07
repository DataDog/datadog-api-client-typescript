import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Variable object for `extractVariable` step type.
 */
export class SyntheticsMobileStepParamsVariable {
  /**
   * An example for the variable.
   */
  "example": string;
  /**
   * The variable name.
   */
  "name": string;
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
    example: {
      baseName: "example",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
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
    return SyntheticsMobileStepParamsVariable.attributeTypeMap;
  }

  public constructor() {}
}
