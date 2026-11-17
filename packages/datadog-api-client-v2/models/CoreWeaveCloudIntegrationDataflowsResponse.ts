/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CoreWeaveCloudLogsIntegrationDataflowResponse } from "./CoreWeaveCloudLogsIntegrationDataflowResponse";
import { CoreWeaveCloudMetricsIntegrationDataflowResponse } from "./CoreWeaveCloudMetricsIntegrationDataflowResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data Datadog collects from CoreWeave, keyed by dataflow id.
 */
export class CoreWeaveCloudIntegrationDataflowsResponse {
  /**
   * Service logs for CoreWeave-managed components in each CoreWeave region: the CKS control plane (such as `kube-apiserver` and `etcd`), CoreWeave add-on services in the `cw-*` and `kube-system` namespaces, SUNK, and node system logs such as `kubelet` and `containerd`. Logs from your own workloads and Kubernetes audit logs are not collected. Logs are sent with `source:coreweave`, with CoreWeave log labels such as `namespace`, `app`, and `systemd_unit` added as tags.
   */
  "coreweaveCloudLogs"?: CoreWeaveCloudLogsIntegrationDataflowResponse;
  /**
   * Metrics from your CoreWeave organization: CoreWeave service metrics collected through its PromQL-compatible Prometheus endpoint, plus the `coreweave.*` namespaces from CoreWeave products such as Kubernetes, Database, Distributed File Storage, Inference, and Object Storage. Compute metrics (`coreweave.bare_metal`, `coreweave.gpu`, `coreweave.nccl`, and `coreweave.node`) are in Preview. Container metrics are not collected; install the Datadog Agent on your clusters for those.
   */
  "coreweaveCloudMetrics"?: CoreWeaveCloudMetricsIntegrationDataflowResponse;

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
    coreweaveCloudLogs: {
      baseName: "coreweave-cloud-logs",
      type: "CoreWeaveCloudLogsIntegrationDataflowResponse",
    },
    coreweaveCloudMetrics: {
      baseName: "coreweave-cloud-metrics",
      type: "CoreWeaveCloudMetricsIntegrationDataflowResponse",
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
    return CoreWeaveCloudIntegrationDataflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
