import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Token limits reported by the enrichment source.
 */
export class AiGatewayModelLimits {
  /**
   * Total model context window in tokens.
   */
  "contextWindowTokens"?: number;
  /**
   * Maximum input tokens when reported separately.
   */
  "maxInputTokens"?: number;
  /**
   * Maximum output tokens.
   */
  "maxOutputTokens"?: number;
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
    contextWindowTokens: {
      baseName: "context_window_tokens",
      type: "number",
      format: "int64",
    },
    maxInputTokens: {
      baseName: "max_input_tokens",
      type: "number",
      format: "int64",
    },
    maxOutputTokens: {
      baseName: "max_output_tokens",
      type: "number",
      format: "int64",
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
    return AiGatewayModelLimits.attributeTypeMap;
  }

  public constructor() {}
}
