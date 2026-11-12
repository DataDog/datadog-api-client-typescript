import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for creating the ChatGPT Enterprise integration account.
 */
export class ChatGPTEnterpriseIntegrationAccountSettingsRequest {
  /**
   * OpenAI API Platform organization ID (`org-...`) that the Costs API uses for your Enterprise usage. This is not the ChatGPT workspace UUID or your Datadog organization ID. A value that does not match `^org-[A-Za-z0-9]+$` is rejected with a `422` response.
   */
  "openaiOrgId": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    openaiOrgId: {
      baseName: "openai_org_id",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ChatGPTEnterpriseIntegrationAccountSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
