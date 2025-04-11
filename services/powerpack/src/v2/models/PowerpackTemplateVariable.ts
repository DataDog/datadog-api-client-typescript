import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Powerpack template variables.
 */
export class PowerpackTemplateVariable {
  /**
   * The list of values that the template variable drop-down is limited to.
   */
  "availableValues"?: Array<string>;
  /**
   * One or many template variable default values within the saved view, which are unioned together using `OR` if more than one is specified.
   */
  "defaults"?: Array<string>;
  /**
   * The name of the variable.
   */
  "name": string;
  /**
   * The tag prefix associated with the variable. Only tags with this prefix appear in the variable drop-down.
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
    availableValues: {
      baseName: "available_values",
      type: "Array<string>",
    },
    defaults: {
      baseName: "defaults",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
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
    return PowerpackTemplateVariable.attributeTypeMap;
  }

  public constructor() {}
}
