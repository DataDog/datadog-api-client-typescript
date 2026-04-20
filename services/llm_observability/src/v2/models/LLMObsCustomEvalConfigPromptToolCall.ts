import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A tool call within a prompt message.
 */
export class LLMObsCustomEvalConfigPromptToolCall {
  /**
   * JSON-encoded arguments for the tool call.
   */
  "arguments"?: string;
  /**
   * Unique identifier of the tool call.
   */
  "id"?: string;
  /**
   * Name of the tool being called.
   */
  "name"?: string;
  /**
   * Type of the tool call.
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
    return LLMObsCustomEvalConfigPromptToolCall.attributeTypeMap;
  }

  public constructor() {}
}
