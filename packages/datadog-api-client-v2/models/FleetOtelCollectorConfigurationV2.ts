/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration for a single OpenTelemetry collector associated with the agent.
 */
export class FleetOtelCollectorConfigurationV2 {
  /**
   * The unique identifier of the OpenTelemetry collector.
   */
  "collectorId"?: string;
  /**
   * The final compiled configuration of the OpenTelemetry collector.
   */
  "compiledConfiguration"?: string;
  /**
   * The distribution of the OpenTelemetry collector.
   */
  "distribution"?: string;

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
    collectorId: {
      baseName: "collector_id",
      type: "string",
    },
    compiledConfiguration: {
      baseName: "compiled_configuration",
      type: "string",
    },
    distribution: {
      baseName: "distribution",
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
    return FleetOtelCollectorConfigurationV2.attributeTypeMap;
  }

  public constructor() {}
}
