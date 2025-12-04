/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Detailed information about a Datadog Agent.
 */
export class FleetAgentInfoDetails {
  /**
   * The Datadog Agent version.
   */
  "agentVersion"?: string;
  /**
   * The API key name (if available and not redacted).
   */
  "apiKeyName"?: string;
  /**
   * The API key UUID.
   */
  "apiKeyUuid"?: string;
  /**
   * The cloud provider where the agent is running.
   */
  "cloudProvider"?: string;
  /**
   * Kubernetes cluster name (if applicable).
   */
  "clusterName"?: string;
  /**
   * The unique agent key identifier.
   */
  "datadogAgentKey"?: string;
  /**
   * Datadog products enabled on the agent.
   */
  "enabledProducts"?: Array<string>;
  /**
   * Environments the agent is reporting from.
   */
  "env"?: Array<string>;
  /**
   * Timestamp when the agent was first seen.
   */
  "firstSeenAt"?: number;
  /**
   * The hostname of the agent.
   */
  "hostname"?: string;
  /**
   * Alternative hostname list for the agent.
   */
  "hostnameAliases"?: Array<string>;
  /**
   * The version of the installer used.
   */
  "installMethodInstallerVersion"?: string;
  /**
   * The tool used to install the agent.
   */
  "installMethodTool"?: string;
  /**
   * IP addresses of the agent.
   */
  "ipAddresses"?: Array<string>;
  /**
   * Whether single-step instrumentation is enabled.
   */
  "isSingleStepInstrumentationEnabled"?: boolean;
  /**
   * Timestamp of the last agent restart.
   */
  "lastRestartAt"?: number;
  /**
   * The operating system.
   */
  "os"?: string;
  /**
   * The operating system version.
   */
  "osVersion"?: string;
  /**
   * OpenTelemetry collector version (if applicable).
   */
  "otelCollectorVersion"?: string;
  /**
   * List of OpenTelemetry collector versions (if applicable).
   */
  "otelCollectorVersions"?: Array<string>;
  /**
   * OpenTelemetry collectors associated with the agent (if applicable).
   */
  "otelCollectors"?: Array<{ [key: string]: any }>;
  /**
   * Kubernetes pod name (if applicable).
   */
  "podName"?: string;
  /**
   * The Python version used by the agent.
   */
  "pythonVersion"?: string;
  /**
   * Regions where the agent is running.
   */
  "region"?: Array<string>;
  /**
   * Remote agent management status.
   */
  "remoteAgentManagement"?: string;
  /**
   * Remote configuration status.
   */
  "remoteConfigStatus"?: string;
  /**
   * Services running on the agent.
   */
  "services"?: Array<string>;
  /**
   * Tags associated with the agent.
   */
  "tags"?: Array<string>;
  /**
   * Team associated with the agent.
   */
  "team"?: string;

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
    agentVersion: {
      baseName: "agent_version",
      type: "string",
    },
    apiKeyName: {
      baseName: "api_key_name",
      type: "string",
    },
    apiKeyUuid: {
      baseName: "api_key_uuid",
      type: "string",
    },
    cloudProvider: {
      baseName: "cloud_provider",
      type: "string",
    },
    clusterName: {
      baseName: "cluster_name",
      type: "string",
    },
    datadogAgentKey: {
      baseName: "datadog_agent_key",
      type: "string",
    },
    enabledProducts: {
      baseName: "enabled_products",
      type: "Array<string>",
    },
    env: {
      baseName: "env",
      type: "Array<string>",
    },
    firstSeenAt: {
      baseName: "first_seen_at",
      type: "number",
      format: "int64",
    },
    hostname: {
      baseName: "hostname",
      type: "string",
    },
    hostnameAliases: {
      baseName: "hostname_aliases",
      type: "Array<string>",
    },
    installMethodInstallerVersion: {
      baseName: "install_method_installer_version",
      type: "string",
    },
    installMethodTool: {
      baseName: "install_method_tool",
      type: "string",
    },
    ipAddresses: {
      baseName: "ip_addresses",
      type: "Array<string>",
    },
    isSingleStepInstrumentationEnabled: {
      baseName: "is_single_step_instrumentation_enabled",
      type: "boolean",
    },
    lastRestartAt: {
      baseName: "last_restart_at",
      type: "number",
      format: "int64",
    },
    os: {
      baseName: "os",
      type: "string",
    },
    osVersion: {
      baseName: "os_version",
      type: "string",
    },
    otelCollectorVersion: {
      baseName: "otel_collector_version",
      type: "string",
    },
    otelCollectorVersions: {
      baseName: "otel_collector_versions",
      type: "Array<string>",
    },
    otelCollectors: {
      baseName: "otel_collectors",
      type: "Array<{ [key: string]: any; }>",
    },
    podName: {
      baseName: "pod_name",
      type: "string",
    },
    pythonVersion: {
      baseName: "python_version",
      type: "string",
    },
    region: {
      baseName: "region",
      type: "Array<string>",
    },
    remoteAgentManagement: {
      baseName: "remote_agent_management",
      type: "string",
    },
    remoteConfigStatus: {
      baseName: "remote_config_status",
      type: "string",
    },
    services: {
      baseName: "services",
      type: "Array<string>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    team: {
      baseName: "team",
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
    return FleetAgentInfoDetails.attributeTypeMap;
  }

  public constructor() {}
}
