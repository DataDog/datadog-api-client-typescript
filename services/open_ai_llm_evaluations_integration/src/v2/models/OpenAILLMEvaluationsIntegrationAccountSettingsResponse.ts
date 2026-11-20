import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings configured on the OpenAI LLM Evaluations integration account.
 */
export class OpenAILLMEvaluationsIntegrationAccountSettingsResponse {
  /**
   * Comma-separated list of custom tags applied to the data collected for this account, for example `team:ai,env:prod`.
   */
  "customTags"?: string;
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
    customTags: {
      baseName: "custom_tags",
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
    return OpenAILLMEvaluationsIntegrationAccountSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
