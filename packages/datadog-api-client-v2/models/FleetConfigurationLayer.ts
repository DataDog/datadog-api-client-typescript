/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration information organized by layers.
 */
export class FleetConfigurationLayer {
  /**
   * The final compiled configuration.
   */
  "compiledConfiguration"?: string;
  /**
   * Configuration from environment variables.
   */
  "envConfiguration"?: string;
  /**
   * Configuration from files.
   */
  "fileConfiguration"?: string;
  /**
   * Parsed configuration output.
   */
  "parsedConfiguration"?: string;
  /**
   * Remote configuration settings.
   */
  "remoteConfiguration"?: string;
  /**
   * Runtime configuration.
   */
  "runtimeConfiguration"?: string;

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
    compiledConfiguration: {
      baseName: "compiled_configuration",
      type: "string",
    },
    envConfiguration: {
      baseName: "env_configuration",
      type: "string",
    },
    fileConfiguration: {
      baseName: "file_configuration",
      type: "string",
    },
    parsedConfiguration: {
      baseName: "parsed_configuration",
      type: "string",
    },
    remoteConfiguration: {
      baseName: "remote_configuration",
      type: "string",
    },
    runtimeConfiguration: {
      baseName: "runtime_configuration",
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
    return FleetConfigurationLayer.attributeTypeMap;
  }

  public constructor() {}
}
