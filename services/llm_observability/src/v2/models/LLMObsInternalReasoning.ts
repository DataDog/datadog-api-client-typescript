import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The model's internal reasoning or thinking output, if available.
 */
export class LLMObsInternalReasoning {
  /**
   * Number of tokens used for internal reasoning.
   */
  "reasoningTokens"?: number;
  /**
   * The reasoning text produced by the model.
   */
  "text": string;
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
    reasoningTokens: {
      baseName: "reasoning_tokens",
      type: "number",
      format: "int64",
    },
    text: {
      baseName: "text",
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
    return LLMObsInternalReasoning.attributeTypeMap;
  }

  public constructor() {}
}
