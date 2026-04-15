/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a Kubernetes cluster in the fleet.
 */
export class FleetClusterAttributes {
  /**
   * Datadog Agent versions running in the cluster.
   */
  "agentVersions"?: Array<string>;
  /**
   * API key names used by agents in the cluster.
   */
  "apiKeyNames"?: Array<string>;
  /**
   * API key UUIDs used by agents in the cluster.
   */
  "apiKeyUuids"?: Array<string>;
  /**
   * Cloud providers hosting the cluster.
   */
  "cloudProviders"?: Array<string>;
  /**
   * The name of the Kubernetes cluster.
   */
  "clusterName"?: string;
  /**
   * Datadog products enabled in the cluster.
   */
  "enabledProducts"?: Array<string>;
  /**
   * Environments associated with the cluster.
   */
  "envs"?: Array<string>;
  /**
   * Timestamp when the cluster was first seen.
   */
  "firstSeenAt"?: number;
  /**
   * The tool used to install agents in the cluster.
   */
  "installMethodTool"?: string;
  /**
   * Total number of nodes in the cluster.
   */
  "nodeCount"?: number;
  /**
   * Node counts grouped by status.
   */
  "nodeCountByStatus"?: { [key: string]: number };
  /**
   * Operating systems of nodes in the cluster.
   */
  "operatingSystems"?: Array<string>;
  /**
   * OpenTelemetry collector distributions in the cluster.
   */
  "otelCollectorDistributions"?: Array<string>;
  /**
   * OpenTelemetry collector versions in the cluster.
   */
  "otelCollectorVersions"?: Array<string>;
  /**
   * Pod counts grouped by state.
   */
  "podCountByState"?: { [key: string]: number };
  /**
   * Services running in the cluster.
   */
  "services"?: Array<string>;
  /**
   * Teams associated with the cluster.
   */
  "teams"?: Array<string>;

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
    agentVersions: {
      baseName: "agent_versions",
      type: "Array<string>",
    },
    apiKeyNames: {
      baseName: "api_key_names",
      type: "Array<string>",
    },
    apiKeyUuids: {
      baseName: "api_key_uuids",
      type: "Array<string>",
    },
    cloudProviders: {
      baseName: "cloud_providers",
      type: "Array<string>",
    },
    clusterName: {
      baseName: "cluster_name",
      type: "string",
    },
    enabledProducts: {
      baseName: "enabled_products",
      type: "Array<string>",
    },
    envs: {
      baseName: "envs",
      type: "Array<string>",
    },
    firstSeenAt: {
      baseName: "first_seen_at",
      type: "number",
      format: "int64",
    },
    installMethodTool: {
      baseName: "install_method_tool",
      type: "string",
    },
    nodeCount: {
      baseName: "node_count",
      type: "number",
      format: "int64",
    },
    nodeCountByStatus: {
      baseName: "node_count_by_status",
      type: "{ [key: string]: number; }",
    },
    operatingSystems: {
      baseName: "operating_systems",
      type: "Array<string>",
    },
    otelCollectorDistributions: {
      baseName: "otel_collector_distributions",
      type: "Array<string>",
    },
    otelCollectorVersions: {
      baseName: "otel_collector_versions",
      type: "Array<string>",
    },
    podCountByState: {
      baseName: "pod_count_by_state",
      type: "{ [key: string]: number; }",
    },
    services: {
      baseName: "services",
      type: "Array<string>",
    },
    teams: {
      baseName: "teams",
      type: "Array<string>",
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
    return FleetClusterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
