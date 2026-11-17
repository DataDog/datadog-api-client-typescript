/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Service logs for CoreWeave-managed components in each CoreWeave region: the CKS control plane (such as `kube-apiserver` and `etcd`), CoreWeave add-on services in the `cw-*` and `kube-system` namespaces, SUNK, and node system logs such as `kubelet` and `containerd`. Logs from your own workloads and Kubernetes audit logs are not collected. Logs are sent with `source:coreweave`, with CoreWeave log labels such as `namespace`, `app`, and `systemd_unit` added as tags.
 */
export class CoreWeaveCloudLogsIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `false`; set to `true` to start collection.
   */
  "enabled"?: boolean;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CoreWeaveCloudLogsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
