import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { VercelEnvironment } from "./VercelEnvironment";
import { VercelLogSource } from "./VercelLogSource";

/**
 * Logs forwarding configuration for the Vercel integration.
 */
export class VercelLogsConfig {
  /**
   * Whether logs forwarding is enabled.
   */
  "enabled": boolean;
  /**
   * List of Vercel deployment environments to forward telemetry from.
   */
  "environments": Array<VercelEnvironment>;
  /**
   * List of Vercel log sources to forward to Datadog.
   */
  "logSources": Array<VercelLogSource>;
  /**
   * Percentage of logs to forward to Datadog, between 0 and 100.
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
    environments: {
      baseName: "environments",
      type: "Array<VercelEnvironment>",
      required: true,
    },
    logSources: {
      baseName: "logSources",
      type: "Array<VercelLogSource>",
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
    return VercelLogsConfig.attributeTypeMap;
  }

  public constructor() {}
}
