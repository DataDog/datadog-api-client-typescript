import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * AWS Bedrock-specific options for LLM provider configuration.
 */
export class LLMObsCustomEvalConfigBedrockOptions {
  /**
   * AWS region for Bedrock.
   */
  "region"?: string;
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
    region: {
      baseName: "region",
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
    return LLMObsCustomEvalConfigBedrockOptions.attributeTypeMap;
  }

  public constructor() {}
}
