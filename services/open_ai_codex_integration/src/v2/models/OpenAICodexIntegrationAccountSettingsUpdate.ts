import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings for updating the OpenAI Codex integration account. Only the fields provided are changed.
 */
export class OpenAICodexIntegrationAccountSettingsUpdate {
  /**
   * ID of the Codex workspace to collect data from.
   */
  "codexWorkspaceId"?: string;
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
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpenAICodexIntegrationAccountSettingsUpdate.attributeTypeMap;
  }

  public constructor() {}
}
