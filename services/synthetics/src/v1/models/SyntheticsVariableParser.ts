import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsGlobalVariableParserType } from "./SyntheticsGlobalVariableParserType";

/**
 * Details of the parser to use for the global variable.
 */
export class SyntheticsVariableParser {
  /**
   * Type of parser for a Synthetic global variable from a synthetics test.
   */
  "type": SyntheticsGlobalVariableParserType;
  /**
   * Regex or JSON path used for the parser. Not used with type `raw`.
   */
  "value"?: string;
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
    type: {
      baseName: "type",
      type: "SyntheticsGlobalVariableParserType",
      required: true,
    },
    value: {
      baseName: "value",
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
    return SyntheticsVariableParser.attributeTypeMap;
  }

  public constructor() {}
}
