/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A configuration file for an integration.
 */
export class FleetConfigurationFileV2 {
  /**
   * Hash of the configuration file as seen by the agent.
   */
  "agentHash"?: string;
  /**
   * The raw content of the configuration file.
   */
  "fileContent"?: string;
  /**
   * Path to the configuration file.
   */
  "filePath"?: string;
  /**
   * Name of the configuration file.
   */
  "filename"?: string;
  /**
   * Hash of the configuration file as applied by fleet management.
   */
  "fleetHash"?: string;

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
    agentHash: {
      baseName: "agent_hash",
      type: "string",
    },
    fileContent: {
      baseName: "file_content",
      type: "string",
    },
    filePath: {
      baseName: "file_path",
      type: "string",
    },
    filename: {
      baseName: "filename",
      type: "string",
    },
    fleetHash: {
      baseName: "fleet_hash",
      type: "string",
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
    return FleetConfigurationFileV2.attributeTypeMap;
  }

  public constructor() {}
}
