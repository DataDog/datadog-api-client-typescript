/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CsmAgentlessHostResourceType } from "./CsmAgentlessHostResourceType";
import { CsmCloudProvider } from "./CsmCloudProvider";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an agentless host.
 */
export class CsmAgentlessHostAttributes {
  /**
   * The ID of the cloud account that the host belongs to.
   */
  "accountId": string;
  /**
   * The cloud provider of a host resource.
   */
  "cloudProvider": CsmCloudProvider;
  /**
   * Whether CSM Misconfigurations is enabled for this host. `true` if enabled; `false` if disabled.
   */
  "hasPostureManagement": boolean;
  /**
   * Whether CSM Vulnerabilities is enabled for this host. `true` if enabled; `false` if disabled.
   */
  "hasVulnerabilityScanning": boolean;
  /**
   * The type of cloud resource for an agentless host.
   */
  "resourceType": CsmAgentlessHostResourceType;

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
    accountId: {
      baseName: "account_id",
      type: "string",
      required: true,
    },
    cloudProvider: {
      baseName: "cloud_provider",
      type: "CsmCloudProvider",
      required: true,
    },
    hasPostureManagement: {
      baseName: "has_posture_management",
      type: "boolean",
      required: true,
    },
    hasVulnerabilityScanning: {
      baseName: "has_vulnerability_scanning",
      type: "boolean",
      required: true,
    },
    resourceType: {
      baseName: "resource_type",
      type: "CsmAgentlessHostResourceType",
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
    return CsmAgentlessHostAttributes.attributeTypeMap;
  }

  public constructor() {}
}
