import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The result returned by a tool call during LLM inference.
 */
export class LLMObsInferenceToolResult {
  /**
   * The name of the tool that produced this result.
   */
  "name"?: string;
  /**
   * The result content returned by the tool.
   */
  "result"?: string;
  /**
   * Identifier matching the corresponding tool call.
   */
  "toolId"?: string;
  /**
   * The type of tool result.
   */
  "type"?: string;
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
    },
    result: {
      baseName: "result",
      type: "string",
    },
    toolId: {
      baseName: "tool_id",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return LLMObsInferenceToolResult.attributeTypeMap;
  }

  public constructor() {}
}
