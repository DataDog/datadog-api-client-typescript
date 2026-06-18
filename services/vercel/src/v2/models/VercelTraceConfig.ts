import { AttributeTypeMap } from "@datadog/datadog-api-client";

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
