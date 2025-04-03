import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Powerpack template variable contents.
 */
export class PowerpackTemplateVariableContents {
  /**
   * The name of the variable.
   */
  "name": string;
  /**
   * The tag prefix associated with the variable.
   */
  "prefix"?: string;
  /**
   * One or many template variable values within the saved view, which will be unioned together using `OR` if more than one is specified.
   */
  "values": Array<string>;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    prefix: {
      baseName: "prefix",
      type: "string",
    },
    values: {
      baseName: "values",
      type: "Array<string>",
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
    return PowerpackTemplateVariableContents.attributeTypeMap;
  }

  public constructor() {}
}
