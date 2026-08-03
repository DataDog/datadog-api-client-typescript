import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetConfigurationLayer } from "./FleetConfigurationLayer";
import { FleetOtelCollectorConfigurationV2 } from "./FleetOtelCollectorConfigurationV2";

/**
 * Configuration details for an agent, organized by configuration layer.
 */
export class FleetAgentConfigurationFilesV2 {
  /**
   * Configuration information organized by layers.
   */
  "agentConfiguration"?: FleetConfigurationLayer;
  /**
   * Configuration information organized by layers.
   */
  "applicationMonitoringConfiguration"?: FleetConfigurationLayer;
  /**
   * The unique agent key identifier.
   */
  "datadogAgentKey"?: string;
  /**
   * Configuration for OpenTelemetry collectors associated with the agent. Present only when the agent has associated OpenTelemetry collectors.
   */
  "otelCollectorsConfiguration"?: Array<FleetOtelCollectorConfigurationV2>;
  /**
   * Configuration information organized by layers.
   */
  "securityAgentConfiguration"?: FleetConfigurationLayer;
  /**
   * Configuration information organized by layers.
   */
  "systemProbeConfiguration"?: FleetConfigurationLayer;
  /**
   * The configuration version.
   */
  "version"?: string;
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
    agentConfiguration: {
      baseName: "agent_configuration",
      type: "FleetConfigurationLayer",
    },
    applicationMonitoringConfiguration: {
      baseName: "application_monitoring_configuration",
      type: "FleetConfigurationLayer",
    },
    datadogAgentKey: {
      baseName: "datadog_agent_key",
      type: "string",
    },
    otelCollectorsConfiguration: {
      baseName: "otel_collectors_configuration",
      type: "Array<FleetOtelCollectorConfigurationV2>",
    },
    securityAgentConfiguration: {
      baseName: "security_agent_configuration",
      type: "FleetConfigurationLayer",
    },
    systemProbeConfiguration: {
      baseName: "system_probe_configuration",
      type: "FleetConfigurationLayer",
    },
    version: {
      baseName: "version",
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
    return FleetAgentConfigurationFilesV2.attributeTypeMap;
  }

  public constructor() {}
}
