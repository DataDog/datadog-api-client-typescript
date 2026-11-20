import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for creating the OpenAI LLM Evaluations integration account.
 */
export class OpenAILLMEvaluationsIntegrationAccountSettingsRequest {
  /**
   * Comma-separated list of custom tags applied to the data collected for this account, for example `team:ai,env:prod`.
   */
  "customTags"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customTags: {
      baseName: "custom_tags",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpenAILLMEvaluationsIntegrationAccountSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
