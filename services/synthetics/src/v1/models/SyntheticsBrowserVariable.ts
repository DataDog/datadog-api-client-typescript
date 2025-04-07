import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsBrowserVariableType } from "./SyntheticsBrowserVariableType";

/**
 * Object defining a variable that can be used in your browser test.
 * See the [Recording Steps documentation](https://docs.datadoghq.com/synthetics/browser_tests/actions/?tab=testanelementontheactivepage#variables).
 */
export class SyntheticsBrowserVariable {
  /**
   * Example for the variable.
   */
  "example"?: string;
  /**
   * ID for the variable. Global variables require an ID.
   */
  "id"?: string;
  /**
   * Name of the variable.
   */
  "name": string;
  /**
   * Pattern of the variable.
   */
  "pattern"?: string;
  /**
   * Determines whether or not the browser test variable is obfuscated. Can only be used with browser variables of type `text`.
   */
  "secure"?: boolean;
  /**
   * Type of browser test variable.
   */
  "type": SyntheticsBrowserVariableType;
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
    },
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    pattern: {
      baseName: "pattern",
      type: "string",
    },
    secure: {
      baseName: "secure",
      type: "boolean",
    },
    type: {
      baseName: "type",
      type: "SyntheticsBrowserVariableType",
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
    return SyntheticsBrowserVariable.attributeTypeMap;
  }

  public constructor() {}
}
