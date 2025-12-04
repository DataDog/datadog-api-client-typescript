import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAgentInfoDetails } from "./FleetAgentInfoDetails";
import { FleetConfigurationLayer } from "./FleetConfigurationLayer";
import { FleetDetectedIntegration } from "./FleetDetectedIntegration";
import { FleetIntegrationsByStatus } from "./FleetIntegrationsByStatus";

/**
 * Attributes for agent information.
 */
export class FleetAgentInfoAttributes {
  /**
   * Detailed information about a Datadog Agent.
   */
  "agentInfos"?: FleetAgentInfoDetails;
  /**
   * Configuration information organized by layers.
   */
  "configurationFiles"?: FleetConfigurationLayer;
  /**
   * List of detected integrations.
   */
  "detectedIntegrations"?: Array<FleetDetectedIntegration>;
  /**
   * Integrations organized by their status.
   */
  "integrations"?: FleetIntegrationsByStatus;
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
      type: "FleetAgentInfoDetails",
    },
    configurationFiles: {
      baseName: "configuration_files",
      type: "FleetConfigurationLayer",
    },
    detectedIntegrations: {
      baseName: "detected_integrations",
      type: "Array<FleetDetectedIntegration>",
    },
    integrations: {
      baseName: "integrations",
      type: "FleetIntegrationsByStatus",
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
    return FleetAgentInfoAttributes.attributeTypeMap;
  }

  public constructor() {}
}
