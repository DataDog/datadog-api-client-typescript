/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetAgentInfoDetails } from "./FleetAgentInfoDetails";
import { FleetConfigurationLayer } from "./FleetConfigurationLayer";
import { FleetDetectedIntegration } from "./FleetDetectedIntegration";
import { FleetIntegrationsByStatus } from "./FleetIntegrationsByStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
