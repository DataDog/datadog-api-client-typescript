import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NebiusCloudCostCollectionIntegrationDataflowRequest } from "./NebiusCloudCostCollectionIntegrationDataflowRequest";
import { NebiusCloudLogsIntegrationDataflowRequest } from "./NebiusCloudLogsIntegrationDataflowRequest";
import { NebiusCloudResourcesIntegrationDataflowRequest } from "./NebiusCloudResourcesIntegrationDataflowRequest";
import { NebiusCloudServiceQuotaCollectionIntegrationDataflowRequest } from "./NebiusCloudServiceQuotaCollectionIntegrationDataflowRequest";

/**
 * Data Datadog collects from Nebius Cloud, keyed by dataflow id. Each dataflow turns on a distinct kind of collection: set `enabled` to stop or start it, and use `settings` to configure what it collects. Defaults listed on each dataflow apply when the account is created; on update, omitted fields keep their current values. Every dataflow except `nebius-cloud-cost-collection` runs as the service account in `authentication`, using its authorized key pair and the static API key; enabling one of them without those keys is rejected with a `422` response, and one enabled with keys that later expire is stored but collects no data.
 */
export class NebiusCloudIntegrationDataflowsRequest {
  /**
   * Cloud cost data read from a Nebius Object Storage bucket export and used by [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). Enabling it requires a bucket holding your cost export and a Nebius access key pair that can read it; a request that enables this dataflow without them is rejected with a `422` response.
   */
  "nebiusCloudCostCollection"?: NebiusCloudCostCollectionIntegrationDataflowRequest;
  /**
   * Logs from your Nebius tenant: Kubernetes control plane and audit logs, tenant-level audit events, compute serial console logs, cloud apps and AI inference logs, PostgreSQL logs, and MLflow logs, collected from the services named in `settings.enabled_services`. `enabled_services` is the sole source of truth for what is collected; `enabled` set to `false` stops log collection, while `true` on its own changes nothing. Defaults to no services.
   */
  "nebiusCloudLogs"?: NebiusCloudLogsIntegrationDataflowRequest;
  /**
   * Metadata about resources in your Nebius tenant, such as compute instances and Kubernetes clusters.
   */
  "nebiusCloudResources"?: NebiusCloudResourcesIntegrationDataflowRequest;
  /**
   * Usage metrics tracked against your Nebius service quotas, such as `nebius_cloud.servicequota.percentage_used` and `nebius_cloud.servicequota.limit`.
   */
  "nebiusCloudServiceQuotaCollection"?: NebiusCloudServiceQuotaCollectionIntegrationDataflowRequest;
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
      type: "NebiusCloudCostCollectionIntegrationDataflowRequest",
    },
    nebiusCloudLogs: {
      baseName: "nebius-cloud-logs",
      type: "NebiusCloudLogsIntegrationDataflowRequest",
    },
    nebiusCloudResources: {
      baseName: "nebius-cloud-resources",
      type: "NebiusCloudResourcesIntegrationDataflowRequest",
    },
    nebiusCloudServiceQuotaCollection: {
      baseName: "nebius-cloud-service-quota-collection",
      type: "NebiusCloudServiceQuotaCollectionIntegrationDataflowRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NebiusCloudIntegrationDataflowsRequest.attributeTypeMap;
  }

  public constructor() {}
}
