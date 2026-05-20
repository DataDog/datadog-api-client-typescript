import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A result returned from a tool call during a span.
 */
export class LLMObsSpanToolResult {
  /**
   * Name of the tool that produced this result.
   */
  "name"?: string;
  /**
   * Result value returned by the tool.
   */
  "result"?: string;
  /**
   * Identifier of the corresponding tool call.
   */
  "toolId"?: string;
  /**
   * Type of the tool result.
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
    return LLMObsSpanToolResult.attributeTypeMap;
  }

  public constructor() {}
}
