import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A parameter definition for a segment template.
 */
export class RumSegmentTemplateParameterDef {
  /**
   * The default value for the parameter.
   */
  "_default": string;
  /**
   * A description of the parameter.
   */
  "description": string;
  /**
   * Validation rules for the parameter.
   */
  "validate": string;
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
    _default: {
      baseName: "default",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    validate: {
      baseName: "validate",
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
    return RumSegmentTemplateParameterDef.attributeTypeMap;
  }

  public constructor() {}
}
