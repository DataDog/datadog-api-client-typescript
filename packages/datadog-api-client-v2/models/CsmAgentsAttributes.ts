/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A CSM Agent returned by the API.
 */
export class CsmAgentsAttributes {
  /**
   * Version of the Datadog Agent.
   */
  "agentVersion"?: string;
  /**
   * AWS Fargate details.
   */
  "awsFargate"?: string;
  /**
   * List of cluster names associated with the Agent.
   */
  "clusterName"?: Array<string>;
  /**
   * Unique identifier for the Datadog Agent.
   */
  "datadogAgent"?: string;
  /**
   * ARN of the ECS Fargate task.
   */
  "ecsFargateTaskArn"?: string;
  /**
   * List of environments associated with the Agent.
   */
  "envs"?: Array<string>;
  /**
   * ID of the host.
   */
  "hostId"?: number;
  /**
   * Name of the host.
   */
  "hostname"?: string;
  /**
   * Version of the installer used for installing the Datadog Agent.
   */
  "installMethodInstallerVersion"?: string;
  /**
   * Tool used for installing the Datadog Agent.
   */
  "installMethodTool"?: string;
  /**
   * Indicates if CSM VM Containers is enabled.
   */
  "isCsmVmContainersEnabled"?: boolean;
  /**
   * Indicates if CSM VM Hosts is enabled.
   */
  "isCsmVmHostsEnabled"?: boolean;
  /**
   * Indicates if CSPM is enabled.
   */
  "isCspmEnabled"?: boolean;
  /**
   * Indicates if CWS is enabled.
   */
  "isCwsEnabled"?: boolean;
  /**
   * Indicates if CWS Remote Configuration is enabled.
   */
  "isCwsRemoteConfigurationEnabled"?: boolean;
  /**
   * Indicates if Remote Configuration is enabled.
   */
  "isRemoteConfigurationEnabled"?: boolean;
  /**
   * Operating system of the host.
   */
  "os"?: string;

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
    awsFargate: {
      baseName: "aws_fargate",
      type: "string",
    },
    clusterName: {
      baseName: "cluster_name",
      type: "Array<string>",
    },
    datadogAgent: {
      baseName: "datadog_agent",
      type: "string",
    },
    ecsFargateTaskArn: {
      baseName: "ecs_fargate_task_arn",
      type: "string",
    },
    envs: {
      baseName: "envs",
      type: "Array<string>",
    },
    hostId: {
      baseName: "host_id",
      type: "number",
      format: "int64",
    },
    hostname: {
      baseName: "hostname",
      type: "string",
    },
    installMethodInstallerVersion: {
      baseName: "install_method_installer_version",
      type: "string",
    },
    installMethodTool: {
      baseName: "install_method_tool",
      type: "string",
    },
    isCsmVmContainersEnabled: {
      baseName: "is_csm_vm_containers_enabled",
      type: "boolean",
    },
    isCsmVmHostsEnabled: {
      baseName: "is_csm_vm_hosts_enabled",
      type: "boolean",
    },
    isCspmEnabled: {
      baseName: "is_cspm_enabled",
      type: "boolean",
    },
    isCwsEnabled: {
      baseName: "is_cws_enabled",
      type: "boolean",
    },
    isCwsRemoteConfigurationEnabled: {
      baseName: "is_cws_remote_configuration_enabled",
      type: "boolean",
    },
    isRemoteConfigurationEnabled: {
      baseName: "is_remote_configuration_enabled",
      type: "boolean",
    },
    os: {
      baseName: "os",
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
    return CsmAgentsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
