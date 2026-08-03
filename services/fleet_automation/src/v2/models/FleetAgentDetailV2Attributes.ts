import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAgentConfigurationFilesV2 } from "./FleetAgentConfigurationFilesV2";
import { FleetAgentInfoDetailsV2 } from "./FleetAgentInfoDetailsV2";
import { FleetIntegrationsByStatusV2 } from "./FleetIntegrationsByStatusV2";

/**
 * Attributes for the v2 agent detail response.
 */
export class FleetAgentDetailV2Attributes {
  /**
   * Detailed information about a Datadog Agent.
   */
  "agentInfos": FleetAgentInfoDetailsV2;
  /**
   * Configuration details for an agent, organized by configuration layer.
   */
  "configurationFiles"?: FleetAgentConfigurationFilesV2;
  /**
   * Integrations organized by their status.
   */
  "integrations"?: FleetIntegrationsByStatusV2;
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
    agentInfos: {
      baseName: "agent_infos",
      type: "FleetAgentInfoDetailsV2",
      required: true,
    },
    configurationFiles: {
      baseName: "configuration_files",
      type: "FleetAgentConfigurationFilesV2",
    },
    integrations: {
      baseName: "integrations",
      type: "FleetIntegrationsByStatusV2",
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
    return FleetAgentDetailV2Attributes.attributeTypeMap;
  }

  public constructor() {}
}
