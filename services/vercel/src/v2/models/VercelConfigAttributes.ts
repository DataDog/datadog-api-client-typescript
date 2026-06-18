import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { VercelApiKey } from "./VercelApiKey";
import { VercelLogsConfig } from "./VercelLogsConfig";
import { VercelTraceConfig } from "./VercelTraceConfig";

/**
 * Attributes of the Datadog Vercel integration configuration.
 */
export class VercelConfigAttributes {
  /**
   * Datadog API key reference used by the Vercel integration to send telemetry.
   */
  "apiKey": VercelApiKey;
  /**
   * Logs forwarding configuration for the Vercel integration.
   */
  "logsConfig": VercelLogsConfig;
  /**
   * Tracing configuration for the Vercel integration.
   */
  "traceConfig": VercelTraceConfig;
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
    apiKey: {
      baseName: "apiKey",
      type: "VercelApiKey",
      required: true,
    },
    logsConfig: {
      baseName: "logsConfig",
      type: "VercelLogsConfig",
      required: true,
    },
    traceConfig: {
      baseName: "traceConfig",
      type: "VercelTraceConfig",
      required: true,
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
    return VercelConfigAttributes.attributeTypeMap;
  }

  public constructor() {}
}
