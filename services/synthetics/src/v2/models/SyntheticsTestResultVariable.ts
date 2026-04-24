import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A variable used or extracted during a test.
 */
export class SyntheticsTestResultVariable {
  /**
   * Error encountered when evaluating the variable.
   */
  "err"?: string;
  /**
   * Human-readable error message for variable evaluation.
   */
  "errorMessage"?: string;
  /**
   * Example value for the variable.
   */
  "example"?: string;
  /**
   * Variable identifier.
   */
  "id"?: string;
  /**
   * Variable name.
   */
  "name"?: string;
  /**
   * Pattern used to extract the variable.
   */
  "pattern"?: string;
  /**
   * Whether the variable holds a secure value.
   */
  "secure"?: boolean;
  /**
   * Variable type.
   */
  "type"?: string;
  /**
   * Evaluated value of the variable.
   */
  "val"?: string;
  /**
   * Current value of the variable.
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
    err: {
      baseName: "err",
      type: "string",
    },
    errorMessage: {
      baseName: "error_message",
      type: "string",
    },
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
      type: "string",
    },
    val: {
      baseName: "val",
      type: "string",
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
    return SyntheticsTestResultVariable.attributeTypeMap;
  }

  public constructor() {}
}
