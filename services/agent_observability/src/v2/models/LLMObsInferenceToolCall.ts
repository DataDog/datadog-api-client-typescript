import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A tool call made during LLM inference.
 */
export class LLMObsInferenceToolCall {
  /**
   * The arguments passed to the tool.
   */
  "arguments"?: { [key: string]: any };
  /**
   * The name of the tool being called.
   */
  "name"?: string;
  /**
   * Unique identifier for the tool call.
   */
  "toolId"?: string;
  /**
   * The type of tool call.
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
    arguments: {
      baseName: "arguments",
      type: "{ [key: string]: any; }",
    },
    name: {
      baseName: "name",
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
    return LLMObsInferenceToolCall.attributeTypeMap;
  }

  public constructor() {}
}
