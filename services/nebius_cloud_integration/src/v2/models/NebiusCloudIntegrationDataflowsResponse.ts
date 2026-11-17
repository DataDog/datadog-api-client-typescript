import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NebiusCloudCostCollectionIntegrationDataflowResponse } from "./NebiusCloudCostCollectionIntegrationDataflowResponse";
import { NebiusCloudLogsIntegrationDataflowResponse } from "./NebiusCloudLogsIntegrationDataflowResponse";
import { NebiusCloudResourcesIntegrationDataflowResponse } from "./NebiusCloudResourcesIntegrationDataflowResponse";
import { NebiusCloudServiceQuotaCollectionIntegrationDataflowResponse } from "./NebiusCloudServiceQuotaCollectionIntegrationDataflowResponse";

/**
 * Data Datadog collects from Nebius Cloud, keyed by dataflow id.
 */
export class NebiusCloudIntegrationDataflowsResponse {
  /**
   * Cloud cost data read from a Nebius Object Storage bucket export and used by [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). Requires a bucket holding your cost export and a Nebius access key pair that can read it; without both this dataflow collects no data.
   */
  "nebiusCloudCostCollection"?: NebiusCloudCostCollectionIntegrationDataflowResponse;
  /**
   * Logs from your Nebius tenant: Kubernetes control plane and audit logs, tenant-level audit events, compute serial console logs, cloud apps and AI inference logs, PostgreSQL logs, and MLflow logs, collected from the services named in `settings.enabled_services`.
   */
  "nebiusCloudLogs"?: NebiusCloudLogsIntegrationDataflowResponse;
  /**
   * Metadata about resources in your Nebius tenant, such as compute instances and Kubernetes clusters.
   */
  "nebiusCloudResources"?: NebiusCloudResourcesIntegrationDataflowResponse;
  /**
   * Usage metrics tracked against your Nebius service quotas, such as `nebius_cloud.servicequota.percentage_used` and `nebius_cloud.servicequota.limit`.
   */
  "nebiusCloudServiceQuotaCollection"?: NebiusCloudServiceQuotaCollectionIntegrationDataflowResponse;
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
    nebiusCloudCostCollection: {
      baseName: "nebius-cloud-cost-collection",
      type: "NebiusCloudCostCollectionIntegrationDataflowResponse",
    },
    nebiusCloudLogs: {
      baseName: "nebius-cloud-logs",
      type: "NebiusCloudLogsIntegrationDataflowResponse",
    },
    nebiusCloudResources: {
      baseName: "nebius-cloud-resources",
      type: "NebiusCloudResourcesIntegrationDataflowResponse",
    },
    nebiusCloudServiceQuotaCollection: {
      baseName: "nebius-cloud-service-quota-collection",
      type: "NebiusCloudServiceQuotaCollectionIntegrationDataflowResponse",
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
    return NebiusCloudIntegrationDataflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
