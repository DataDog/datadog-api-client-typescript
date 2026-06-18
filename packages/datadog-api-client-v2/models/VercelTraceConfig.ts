/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Tracing configuration for the Vercel integration.
 */
export class VercelTraceConfig {
  /**
   * Whether tracing is enabled.
   */
  "enabled": boolean;
  /**
   * Whether the configuration uses the deprecated OpenTelemetry tracing setup.
   */
  "isDeprecatedOtel": boolean;
  /**
   * Percentage of traces to forward to Datadog, between 0 and 100.
   */
  "samplingPercentage": number;

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
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    isDeprecatedOtel: {
      baseName: "isDeprecatedOtel",
      type: "boolean",
      required: true,
    },
    samplingPercentage: {
      baseName: "samplingPercentage",
      type: "number",
      required: true,
      format: "int32",
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
    return VercelTraceConfig.attributeTypeMap;
  }

  public constructor() {}
}
