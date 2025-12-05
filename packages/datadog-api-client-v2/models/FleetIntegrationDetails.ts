/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Detailed information about a single integration.
 */
export class FleetIntegrationDetails {
  /**
   * Type of data collected (metrics, logs).
   */
  "dataType"?: string;
  /**
   * Error messages if the integration has issues.
   */
  "errorMessages"?: Array<string>;
  /**
   * Initialization configuration (YAML format).
   */
  "initConfig"?: string;
  /**
   * Instance-specific configuration (YAML format).
   */
  "instanceConfig"?: string;
  /**
   * Whether this is a custom integration.
   */
  "isCustomCheck"?: boolean;
  /**
   * Log collection configuration (YAML format).
   */
  "logConfig"?: string;
  /**
   * Name of the integration instance.
   */
  "name"?: string;
  /**
   * Index in the configuration file.
   */
  "sourceIndex"?: number;
  /**
   * Path to the configuration file.
   */
  "sourcePath"?: string;
  /**
   * Integration type.
   */
  "type"?: string;

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
    dataType: {
      baseName: "data_type",
      type: "string",
    },
    errorMessages: {
      baseName: "error_messages",
      type: "Array<string>",
    },
    initConfig: {
      baseName: "init_config",
      type: "string",
    },
    instanceConfig: {
      baseName: "instance_config",
      type: "string",
    },
    isCustomCheck: {
      baseName: "is_custom_check",
      type: "boolean",
    },
    logConfig: {
      baseName: "log_config",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    sourceIndex: {
      baseName: "source_index",
      type: "number",
      format: "int64",
    },
    sourcePath: {
      baseName: "source_path",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return FleetIntegrationDetails.attributeTypeMap;
  }

  public constructor() {}
}
