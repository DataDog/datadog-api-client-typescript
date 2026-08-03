/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetAgentConfigurationFilesV2 } from "./FleetAgentConfigurationFilesV2";
import { FleetAgentInfoDetailsV2 } from "./FleetAgentInfoDetailsV2";
import { FleetIntegrationsByStatusV2 } from "./FleetIntegrationsByStatusV2";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
