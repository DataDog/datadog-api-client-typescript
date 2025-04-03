import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsGlobalVariableParseTestOptionsType } from "./SyntheticsGlobalVariableParseTestOptionsType";
import { SyntheticsVariableParser } from "./SyntheticsVariableParser";

/**
 * Parser options to use for retrieving a Synthetic global variable from a Synthetic test. Used in conjunction with `parse_test_public_id`.
 */
export class SyntheticsGlobalVariableParseTestOptions {
  /**
   * When type is `http_header`, name of the header to use to extract the value.
   */
  "field"?: string;
  /**
   * When type is `local_variable`, name of the local variable to use to extract the value.
   */
  "localVariableName"?: string;
  /**
   * Details of the parser to use for the global variable.
   */
  "parser"?: SyntheticsVariableParser;
  /**
   * Type of value to extract from a test for a Synthetic global variable.
   */
  "type": SyntheticsGlobalVariableParseTestOptionsType;
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
    field: {
      baseName: "field",
      type: "string",
    },
    localVariableName: {
      baseName: "localVariableName",
      type: "string",
    },
    parser: {
      baseName: "parser",
      type: "SyntheticsVariableParser",
    },
    type: {
      baseName: "type",
      type: "SyntheticsGlobalVariableParseTestOptionsType",
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
    return SyntheticsGlobalVariableParseTestOptions.attributeTypeMap;
  }

  public constructor() {}
}
