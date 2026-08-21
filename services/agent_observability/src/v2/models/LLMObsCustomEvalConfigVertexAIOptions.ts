import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Google Vertex AI-specific options for LLM provider configuration.
 */
export class LLMObsCustomEvalConfigVertexAIOptions {
  /**
   * Google Cloud region.
   */
  "location"?: string;
  /**
   * Google Cloud project ID.
   */
  "project"?: string;
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
    location: {
      baseName: "location",
      type: "string",
    },
    project: {
      baseName: "project",
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
    return LLMObsCustomEvalConfigVertexAIOptions.attributeTypeMap;
  }

  public constructor() {}
}
