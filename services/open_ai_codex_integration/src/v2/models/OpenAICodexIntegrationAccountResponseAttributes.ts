import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAICodexIntegrationAccountAuthenticationResponse } from "./OpenAICodexIntegrationAccountAuthenticationResponse";
import { OpenAICodexIntegrationAccountSettingsResponse } from "./OpenAICodexIntegrationAccountSettingsResponse";
import { OpenAICodexIntegrationDataflowsResponse } from "./OpenAICodexIntegrationDataflowsResponse";

/**
 * Attributes of an OpenAI Codex integration account returned in responses.
 */
export class OpenAICodexIntegrationAccountResponseAttributes {
  /**
   * Authentication configured on the OpenAI Codex integration account.
   */
  "authentication"?: OpenAICodexIntegrationAccountAuthenticationResponse;
  /**
   * Data Datadog collects from OpenAI Codex, keyed by dataflow id.
   */
  "dataflows"?: OpenAICodexIntegrationDataflowsResponse;
  /**
   * Human-readable name of the OpenAI Codex integration account.
   */
  "name": string;
  /**
   * Settings configured on the OpenAI Codex integration account.
   */
  "settings": OpenAICodexIntegrationAccountSettingsResponse;
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
    authentication: {
      baseName: "authentication",
      type: "OpenAICodexIntegrationAccountAuthenticationResponse",
    },
    dataflows: {
      baseName: "dataflows",
      type: "OpenAICodexIntegrationDataflowsResponse",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "OpenAICodexIntegrationAccountSettingsResponse",
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
    return OpenAICodexIntegrationAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
