/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CsmAgentlessHostResourceType } from "./CsmAgentlessHostResourceType";
import { CsmCloudProvider } from "./CsmCloudProvider";
import { CsmUnifiedHostSource } from "./CsmUnifiedHostSource";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes of a unified host, combining data from agent and agentless sources.
*/
export class CsmUnifiedHostAttributes {
  /**
   * The ID of the cloud account that the host belongs to. Present only when the host was discovered through agentless scanning.
  */
  "accountId"?: string;
  /**
   * Whether CSM Vulnerabilities is enabled for containers through the Datadog Agent. `true` if enabled; `false` if disabled.
  */
  "agentCsmVmContainersEnabled"?: boolean;
  /**
   * Whether CSM Vulnerabilities is enabled for hosts through the Datadog Agent. `true` if enabled; `false` if disabled.
  */
  "agentCsmVmHostsEnabled"?: boolean;
  /**
   * Whether CSM Threats is enabled for this host through the Datadog Agent. `true` if enabled; `false` if disabled.
  */
  "agentCwsEnabled"?: boolean;
  /**
   * Whether CSM Misconfigurations is enabled for this host through the Datadog Agent. `true` if enabled; `false` if disabled.
  */
  "agentPostureManagement"?: boolean;
  /**
   * The version of the Datadog Agent running on this host.
  */
  "agentVersion"?: string;
  /**
   * Whether CSM Misconfigurations is enabled for this host via agentless scanning. `true` if enabled; `false` if disabled.
  */
  "agentlessPostureManagement"?: boolean;
  /**
   * Whether CSM Vulnerabilities is enabled for this host via agentless scanning. `true` if enabled; `false` if disabled.
  */
  "agentlessVulnerabilityScanning"?: boolean;
  /**
   * The cloud provider of a host resource.
  */
  "cloudProvider"?: CsmCloudProvider;
  /**
   * The name of the Kubernetes cluster the host belongs to, if applicable.
  */
  "clusterName"?: string;
  /**
   * The Datadog Agent key associated with this host. Present only for agent-sourced hosts.
  */
  "datadogAgentKey"?: string;
  /**
   * The list of environment tags associated with this host.
  */
  "env"?: Array<string>;
  /**
   * The internal Datadog host identifier. Present only for agent-sourced hosts.
  */
  "hostId"?: number;
  /**
   * The tool used to install the Datadog Agent on this host.
  */
  "installMethodTool"?: string;
  /**
   * The operating system of the host. Present only for agent-sourced hosts.
  */
  "os"?: string;
  /**
   * The type of cloud resource for an agentless host.
  */
  "resourceType"?: CsmAgentlessHostResourceType;
  /**
   * The source of a unified host entry, indicating whether it was discovered via agent, agentless scanning, or both.
  */
  "source": CsmUnifiedHostSource;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "accountId": {
      "baseName": "account_id",
      "type": "string",
    },
    "agentCsmVmContainersEnabled": {
      "baseName": "agent_csm_vm_containers_enabled",
      "type": "boolean",
    },
    "agentCsmVmHostsEnabled": {
      "baseName": "agent_csm_vm_hosts_enabled",
      "type": "boolean",
    },
    "agentCwsEnabled": {
      "baseName": "agent_cws_enabled",
      "type": "boolean",
    },
    "agentPostureManagement": {
      "baseName": "agent_posture_management",
      "type": "boolean",
    },
    "agentVersion": {
      "baseName": "agent_version",
      "type": "string",
    },
    "agentlessPostureManagement": {
      "baseName": "agentless_posture_management",
      "type": "boolean",
    },
    "agentlessVulnerabilityScanning": {
      "baseName": "agentless_vulnerability_scanning",
      "type": "boolean",
    },
    "cloudProvider": {
      "baseName": "cloud_provider",
      "type": "CsmCloudProvider",
    },
    "clusterName": {
      "baseName": "cluster_name",
      "type": "string",
    },
    "datadogAgentKey": {
      "baseName": "datadog_agent_key",
      "type": "string",
    },
    "env": {
      "baseName": "env",
      "type": "Array<string>",
    },
    "hostId": {
      "baseName": "host_id",
      "type": "number",
      "format": "int64",
    },
    "installMethodTool": {
      "baseName": "install_method_tool",
      "type": "string",
    },
    "os": {
      "baseName": "os",
      "type": "string",
    },
    "resourceType": {
      "baseName": "resource_type",
      "type": "CsmAgentlessHostResourceType",
    },
    "source": {
      "baseName": "source",
      "type": "CsmUnifiedHostSource",
      "required": true,
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




    return CsmUnifiedHostAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









