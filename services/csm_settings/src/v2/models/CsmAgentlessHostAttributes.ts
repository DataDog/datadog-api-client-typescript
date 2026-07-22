import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CsmAgentlessHostResourceType } from "./CsmAgentlessHostResourceType";
import { CsmCloudProvider } from "./CsmCloudProvider";

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
  "additionalProperties"?: { [key: string]: any; };
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
