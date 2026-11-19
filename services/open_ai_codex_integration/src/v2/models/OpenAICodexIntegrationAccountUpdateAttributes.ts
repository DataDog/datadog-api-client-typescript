import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAICodexIntegrationAccountAuthenticationUpdate } from "./OpenAICodexIntegrationAccountAuthenticationUpdate";
import { OpenAICodexIntegrationAccountSettingsUpdate } from "./OpenAICodexIntegrationAccountSettingsUpdate";
import { OpenAICodexIntegrationDataflowsRequest } from "./OpenAICodexIntegrationDataflowsRequest";

/**
 * Writable attributes used to update an OpenAI Codex integration account. Every field is optional. Only the provided fields are changed. When `dataflows` is provided, only the dataflow IDs in the request are modified. Dataflows omitted from the map keep their current configuration.
 */
export class OpenAICodexIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the OpenAI Codex integration account. Exactly one method is set.
   */
  "authentication"?: OpenAICodexIntegrationAccountAuthenticationUpdate;
  /**
   * Data Datadog collects from OpenAI Codex, keyed by dataflow ID. Datadog always collects daily Codex analytics metrics. Each dataflow in this object adds another type of collection. Set `enabled` to start or stop a dataflow. The default for each dataflow applies when the account is created. On update, omitted fields keep their current values. Every dataflow requires an OpenAI enterprise subscription with Codex enabled. If you enable a dataflow without this subscription, Datadog stores the setting but collects no data.
   */
  "dataflows"?: OpenAICodexIntegrationDataflowsRequest;
  /**
   * Human-readable name of the OpenAI Codex integration account.
   */
  "name"?: string;
  /**
   * Settings for updating the OpenAI Codex integration account. Only the fields provided are changed.
   */
  "settings"?: OpenAICodexIntegrationAccountSettingsUpdate;
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
      type: "OpenAICodexIntegrationAccountAuthenticationUpdate",
    },
    dataflows: {
      baseName: "dataflows",
      type: "OpenAICodexIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "OpenAICodexIntegrationAccountSettingsUpdate",
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
    return OpenAICodexIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
