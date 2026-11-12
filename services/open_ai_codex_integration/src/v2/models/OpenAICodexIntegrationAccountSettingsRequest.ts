import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for creating the OpenAI Codex integration account.
 */
export class OpenAICodexIntegrationAccountSettingsRequest {
  /**
   * ID of the Codex workspace to collect data from.
   */
  "codexWorkspaceId": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    codexWorkspaceId: {
      baseName: "codex_workspace_id",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpenAICodexIntegrationAccountSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
