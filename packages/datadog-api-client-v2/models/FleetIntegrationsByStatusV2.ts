/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetConfigurationFileV2 } from "./FleetConfigurationFileV2";
import { FleetDetectedIntegration } from "./FleetDetectedIntegration";
import { FleetIntegrationDetailsV2 } from "./FleetIntegrationDetailsV2";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Integrations organized by their status.
 */
export class FleetIntegrationsByStatusV2 {
  /**
   * The Kubernetes cluster name, if the agent runs in a cluster.
   */
  "clusterName"?: string;
  /**
   * Configuration files for integrations.
   */
  "configurationFiles"?: Array<FleetConfigurationFileV2>;
  /**
   * The unique agent key identifier.
   */
  "datadogAgentKey"?: string;
  /**
   * Integrations with errors.
   */
  "errorIntegrations"?: Array<FleetIntegrationDetailsV2>;
  /**
   * The Kubernetes cluster key, if the agent runs in a cluster.
   */
  "k8sClusterKey"?: string;
  /**
   * Detected but not configured integrations.
   */
  "missingIntegrations"?: Array<FleetDetectedIntegration>;
  /**
   * Integrations with warnings.
   */
  "warningIntegrations"?: Array<FleetIntegrationDetailsV2>;
  /**
   * Integrations that are working correctly.
   */
  "workingIntegrations"?: Array<FleetIntegrationDetailsV2>;

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
    clusterName: {
      baseName: "cluster_name",
      type: "string",
    },
    configurationFiles: {
      baseName: "configuration_files",
      type: "Array<FleetConfigurationFileV2>",
    },
    datadogAgentKey: {
      baseName: "datadog_agent_key",
      type: "string",
    },
    errorIntegrations: {
      baseName: "error_integrations",
      type: "Array<FleetIntegrationDetailsV2>",
    },
    k8sClusterKey: {
      baseName: "k8s_cluster_key",
      type: "string",
    },
    missingIntegrations: {
      baseName: "missing_integrations",
      type: "Array<FleetDetectedIntegration>",
    },
    warningIntegrations: {
      baseName: "warning_integrations",
      type: "Array<FleetIntegrationDetailsV2>",
    },
    workingIntegrations: {
      baseName: "working_integrations",
      type: "Array<FleetIntegrationDetailsV2>",
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
    return FleetIntegrationsByStatusV2.attributeTypeMap;
  }

  public constructor() {}
}
