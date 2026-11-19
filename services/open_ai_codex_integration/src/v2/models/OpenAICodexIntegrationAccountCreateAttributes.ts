import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAICodexIntegrationAccountAuthenticationRequest } from "./OpenAICodexIntegrationAccountAuthenticationRequest";
import { OpenAICodexIntegrationAccountSettingsRequest } from "./OpenAICodexIntegrationAccountSettingsRequest";
import { OpenAICodexIntegrationDataflowsRequest } from "./OpenAICodexIntegrationDataflowsRequest";

/**
 * Writable attributes used to create an OpenAI Codex integration account.
 */
export class OpenAICodexIntegrationAccountCreateAttributes {
  /**
   * Authentication for creating the OpenAI Codex integration account. Exactly one method is set.
   */
  "authentication": OpenAICodexIntegrationAccountAuthenticationRequest;
  /**
   * Data Datadog collects from OpenAI Codex, keyed by dataflow ID. Datadog always collects daily Codex analytics metrics. Each dataflow in this object adds another type of collection. Set `enabled` to start or stop a dataflow. The default for each dataflow applies when the account is created. On update, omitted fields keep their current values. Every dataflow requires an OpenAI enterprise subscription with Codex enabled. If you enable a dataflow without this subscription, Datadog stores the setting but collects no data.
   */
  "dataflows"?: OpenAICodexIntegrationDataflowsRequest;
  /**
   * Human-readable name of the OpenAI Codex integration account.
   */
  "name": string;
  /**
   * Settings for creating the OpenAI Codex integration account.
   */
  "settings": OpenAICodexIntegrationAccountSettingsRequest;
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
      type: "OpenAICodexIntegrationAccountAuthenticationRequest",
      required: true,
    },
    dataflows: {
      baseName: "dataflows",
      type: "OpenAICodexIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "OpenAICodexIntegrationAccountSettingsRequest",
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
    return OpenAICodexIntegrationAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
