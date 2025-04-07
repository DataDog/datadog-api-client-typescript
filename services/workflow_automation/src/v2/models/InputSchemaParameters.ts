import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { InputSchemaParametersType } from "./InputSchemaParametersType";

/**
 * The definition of `InputSchemaParameters` object.
 */
export class InputSchemaParameters {
  /**
   * The `InputSchemaParameters` `defaultValue`.
   */
  "defaultValue"?: any;
  /**
   * The `InputSchemaParameters` `description`.
   */
  "description"?: string;
  /**
   * The `InputSchemaParameters` `label`.
   */
  "label"?: string;
  /**
   * The `InputSchemaParameters` `name`.
   */
  "name": string;
  /**
   * The definition of `InputSchemaParametersType` object.
   */
  "type": InputSchemaParametersType;
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
    defaultValue: {
      baseName: "defaultValue",
      type: "any",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    label: {
      baseName: "label",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "InputSchemaParametersType",
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
    return InputSchemaParameters.attributeTypeMap;
  }

  public constructor() {}
}
