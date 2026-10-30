import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The function invoked by a tool call.
 */
export class AIGuardToolCallFunction {
  /**
   * The arguments of the function call, serialized as a JSON string.
   */
  "arguments": string;
  /**
   * The name of the function to call.
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
    arguments: {
      baseName: "arguments",
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AIGuardToolCallFunction.attributeTypeMap;
  }

  public constructor() {}
}
