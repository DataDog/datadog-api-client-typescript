import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsGlobalVariableAttributes } from "./SyntheticsGlobalVariableAttributes";
import { SyntheticsGlobalVariableParseTestOptions } from "./SyntheticsGlobalVariableParseTestOptions";
import { SyntheticsGlobalVariableValue } from "./SyntheticsGlobalVariableValue";

/**
 * Synthetic global variable.
 */
export class SyntheticsGlobalVariable {
  /**
   * Attributes of the global variable.
   */
  "attributes"?: SyntheticsGlobalVariableAttributes;
  /**
   * Description of the global variable.
   */
  "description": string;
  /**
   * Unique identifier of the global variable.
   */
  "id"?: string;
  /**
   * Determines if the global variable is a FIDO variable.
   */
  "isFido"?: boolean;
  /**
   * Determines if the global variable is a TOTP/MFA variable.
   */
  "isTotp"?: boolean;
  /**
   * Name of the global variable. Unique across Synthetic global variables.
   */
  "name": string;
  /**
   * Parser options to use for retrieving a Synthetic global variable from a Synthetic test. Used in conjunction with `parse_test_public_id`.
   */
  "parseTestOptions"?: SyntheticsGlobalVariableParseTestOptions;
  /**
   * A Synthetic test ID to use as a test to generate the variable value.
   */
  "parseTestPublicId"?: string;
  /**
   * Tags of the global variable.
   */
  "tags": Array<string>;
  /**
   * Value of the global variable.
   */
  "value": SyntheticsGlobalVariableValue;
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
    attributes: {
      baseName: "attributes",
      type: "SyntheticsGlobalVariableAttributes",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    isFido: {
      baseName: "is_fido",
      type: "boolean",
    },
    isTotp: {
      baseName: "is_totp",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    parseTestOptions: {
      baseName: "parse_test_options",
      type: "SyntheticsGlobalVariableParseTestOptions",
    },
    parseTestPublicId: {
      baseName: "parse_test_public_id",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    value: {
      baseName: "value",
      type: "SyntheticsGlobalVariableValue",
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
    return SyntheticsGlobalVariable.attributeTypeMap;
  }

  public constructor() {}
}
