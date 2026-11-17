/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metrics from your CoreWeave organization: CoreWeave service metrics collected through its PromQL-compatible Prometheus endpoint, plus the `coreweave.*` namespaces from CoreWeave products such as Kubernetes, Database, Distributed File Storage, Inference, and Object Storage. Compute metrics (`coreweave.bare_metal`, `coreweave.gpu`, `coreweave.nccl`, and `coreweave.node`) are in Preview. Container metrics are not collected; install the Datadog Agent on your clusters for those.
 */
export class CoreWeaveCloudMetricsIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `true`; set to `false` to stop collection.
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
    return CoreWeaveCloudMetricsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
