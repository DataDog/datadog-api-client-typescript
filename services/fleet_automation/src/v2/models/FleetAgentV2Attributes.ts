import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAgentAttributesTagsItems } from "./FleetAgentAttributesTagsItems";
import { FleetAgentV2AttributesInstrumentationStatus } from "./FleetAgentV2AttributesInstrumentationStatus";

/**
 * Attributes of a Datadog Agent in the v2 list response.
 */
export class FleetAgentV2Attributes {
  /**
   * The Datadog Agent version.
   */
  "agentVersion"?: string;
  /**
   * The name of the API key used by the agent, if available and not redacted.
   */
  "apiKeyName"?: string;
  /**
   * The UUID of the API key used by the agent.
   */
  "apiKeyUuid"?: string;
  /**
   * The cloud provider where the agent is running.
   */
  "cloudProvider"?: string;
  /**
   * The Kubernetes cluster name, if the agent runs in a cluster.
   */
  "clusterName"?: string;
  /**
   * The Datadog data center the agent reports to.
   */
  "datadogDataCenter"?: string;
  /**
   * The ECS Fargate cluster name, if the agent runs in an ECS Fargate environment.
   */
  "ecsFargateClusterName"?: string;
  /**
   * The ECS Fargate task ARN, if the agent runs in an ECS Fargate environment.
   */
  "ecsFargateTaskArn"?: string;
  /**
   * Datadog products enabled on the agent.
   */
  "enabledProducts"?: Array<string>;
  /**
   * Environments the agent is reporting from.
   */
  "env"?: Array<string>;
  /**
   * Unix timestamp when the agent was first seen.
   */
  "firstSeenAt"?: number;
  /**
   * Identifiers of fleet policies applied to the agent.
   */
  "fleetPolicies"?: Array<string>;
  /**
   * The hostname of the agent.
   */
  "hostname"?: string;
  /**
   * Number of instrumentation errors on the agent. Absent from the response when the count is zero.
   */
  "instrumentationErrorCounts"?: number;
  /**
   * The single-step instrumentation status of the Agent.
   */
  "instrumentationStatus"?: FleetAgentV2AttributesInstrumentationStatus;
  /**
   * Names of integrations configured on the agent.
   */
  "integrations"?: Array<string>;
  /**
   * IP addresses of the agent host.
   */
  "ipAddresses"?: Array<string>;
  /**
   * Whether single-step instrumentation is enabled on the agent.
   */
  "isSingleStepInstrumentationEnabled"?: boolean;
  /**
   * Unix timestamp of the last agent restart.
   */
  "lastRestartAt"?: number;
  /**
   * The operating system of the host.
   */
  "os"?: string;
  /**
   * OpenTelemetry collector deployment types associated with the agent.
   */
  "otelCollectorDeploymentTypes"?: Array<string>;
  /**
   * OpenTelemetry collector distributions associated with the agent.
   */
  "otelCollectorDistributions"?: Array<string>;
  /**
   * The primary OpenTelemetry collector version, if applicable.
   */
  "otelCollectorVersion"?: string;
  /**
   * All OpenTelemetry collector versions associated with the agent.
   */
  "otelCollectorVersions"?: Array<string>;
  /**
   * OpenTelemetry resource attributes reported by the agent.
   */
  "otelResourceAttributes"?: Array<string>;
  /**
   * The Kubernetes pod name, if the agent runs as a pod.
   */
  "podName"?: string;
  /**
   * The remote agent management status.
   */
  "remoteAgentManagement"?: string;
  /**
   * The remote configuration connection status of the agent.
   */
  "remoteConfigStatus"?: string;
  /**
   * Services running on the agent.
   */
  "services"?: Array<string>;
  /**
   * Tags associated with the agent. Returned as an empty array when the agent has no tags.
   */
  "tags"?: Array<FleetAgentAttributesTagsItems>;
  /**
   * The team associated with the agent.
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
    datadogDataCenter: {
      baseName: "datadog_data_center",
      type: "string",
    },
    ecsFargateClusterName: {
      baseName: "ecs_fargate_cluster_name",
      type: "string",
    },
    ecsFargateTaskArn: {
      baseName: "ecs_fargate_task_arn",
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
    fleetPolicies: {
      baseName: "fleet_policies",
      type: "Array<string>",
    },
    hostname: {
      baseName: "hostname",
      type: "string",
    },
    instrumentationErrorCounts: {
      baseName: "instrumentation_error_counts",
      type: "number",
      format: "int64",
    },
    instrumentationStatus: {
      baseName: "instrumentation_status",
      type: "FleetAgentV2AttributesInstrumentationStatus",
    },
    integrations: {
      baseName: "integrations",
      type: "Array<string>",
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
    otelCollectorDeploymentTypes: {
      baseName: "otel_collector_deployment_types",
      type: "Array<string>",
    },
    otelCollectorDistributions: {
      baseName: "otel_collector_distributions",
      type: "Array<string>",
    },
    otelCollectorVersion: {
      baseName: "otel_collector_version",
      type: "string",
    },
    otelCollectorVersions: {
      baseName: "otel_collector_versions",
      type: "Array<string>",
    },
    otelResourceAttributes: {
      baseName: "otel_resource_attributes",
      type: "Array<string>",
    },
    podName: {
      baseName: "pod_name",
      type: "string",
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
      type: "Array<FleetAgentAttributesTagsItems>",
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
    return FleetAgentV2Attributes.attributeTypeMap;
  }

  public constructor() {}
}
