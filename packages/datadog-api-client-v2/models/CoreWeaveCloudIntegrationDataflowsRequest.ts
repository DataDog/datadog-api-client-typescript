/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CoreWeaveCloudLogsIntegrationDataflowRequest } from "./CoreWeaveCloudLogsIntegrationDataflowRequest";
import { CoreWeaveCloudMetricsIntegrationDataflowRequest } from "./CoreWeaveCloudMetricsIntegrationDataflowRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data Datadog collects from CoreWeave, keyed by dataflow id. Each dataflow turns on a distinct kind of collection: set `enabled` to start or stop it. Defaults listed on each dataflow apply when the account is created; on update, omitted dataflow ids keep their current values. Collection runs with the API access token in `authentication`, whose user must have the Observability Viewer role; a dataflow enabled without that role is stored but collects no data.
 */
export class CoreWeaveCloudIntegrationDataflowsRequest {
  /**
   * Service logs for CoreWeave-managed components in each CoreWeave region: the CKS control plane (such as `kube-apiserver` and `etcd`), CoreWeave add-on services in the `cw-*` and `kube-system` namespaces, SUNK, and node system logs such as `kubelet` and `containerd`. Logs from your own workloads and Kubernetes audit logs are not collected. Logs are sent with `source:coreweave`, with CoreWeave log labels such as `namespace`, `app`, and `systemd_unit` added as tags.
   */
  "coreweaveCloudLogs"?: CoreWeaveCloudLogsIntegrationDataflowRequest;
  /**
   * Metrics from your CoreWeave organization: CoreWeave service metrics collected through its PromQL-compatible Prometheus endpoint, plus the `coreweave.*` namespaces from CoreWeave products such as Kubernetes, Database, Distributed File Storage, Inference, and Object Storage. Compute metrics (`coreweave.bare_metal`, `coreweave.gpu`, `coreweave.nccl`, and `coreweave.node`) are in Preview. Container metrics are not collected; install the Datadog Agent on your clusters for those.
   */
  "coreweaveCloudMetrics"?: CoreWeaveCloudMetricsIntegrationDataflowRequest;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    coreweaveCloudLogs: {
      baseName: "coreweave-cloud-logs",
      type: "CoreWeaveCloudLogsIntegrationDataflowRequest",
    },
    coreweaveCloudMetrics: {
      baseName: "coreweave-cloud-metrics",
      type: "CoreWeaveCloudMetricsIntegrationDataflowRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CoreWeaveCloudIntegrationDataflowsRequest.attributeTypeMap;
  }

  public constructor() {}
}
