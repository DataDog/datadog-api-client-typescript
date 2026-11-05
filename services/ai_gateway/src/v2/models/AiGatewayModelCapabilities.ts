import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Model features reported by the enrichment source. Omitted properties are unknown.
 */
export class AiGatewayModelCapabilities {
  /**
   * Whether attachment input is supported.
   */
  "attachment"?: boolean;
  /**
   * Whether reasoning can be interleaved with tool use.
   */
  "interleavedReasoning"?: boolean;
  /**
   * Whether reasoning is supported.
   */
  "reasoning"?: boolean;
  /**
   * Whether structured output is supported.
   */
  "structuredOutput"?: boolean;
  /**
   * Whether temperature can be configured.
   */
  "temperature"?: boolean;
  /**
   * Whether tool calls are supported.
   */
  "toolCall"?: boolean;
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
    attachment: {
      baseName: "attachment",
      type: "boolean",
    },
    interleavedReasoning: {
      baseName: "interleaved_reasoning",
      type: "boolean",
    },
    reasoning: {
      baseName: "reasoning",
      type: "boolean",
    },
    structuredOutput: {
      baseName: "structured_output",
      type: "boolean",
    },
    temperature: {
      baseName: "temperature",
      type: "boolean",
    },
    toolCall: {
      baseName: "tool_call",
      type: "boolean",
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
    return AiGatewayModelCapabilities.attributeTypeMap;
  }

  public constructor() {}
}
