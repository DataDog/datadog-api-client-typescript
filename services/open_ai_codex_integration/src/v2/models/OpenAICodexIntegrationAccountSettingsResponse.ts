import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings configured on the OpenAI Codex integration account.
 */
export class OpenAICodexIntegrationAccountSettingsResponse {
  /**
   * ID of the Codex workspace to collect data from.
   */
  "codexWorkspaceId": string;
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
    codexWorkspaceId: {
      baseName: "codex_workspace_id",
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
    return OpenAICodexIntegrationAccountSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
