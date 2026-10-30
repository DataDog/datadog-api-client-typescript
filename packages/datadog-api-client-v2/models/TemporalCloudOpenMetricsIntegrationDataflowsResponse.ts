/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TemporalCloudOpenMetricsMetricsIntegrationDataflowResponse } from "./TemporalCloudOpenMetricsMetricsIntegrationDataflowResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data Datadog collects from Temporal Cloud OpenMetrics, keyed by dataflow id.
 */
export class TemporalCloudOpenMetricsIntegrationDataflowsResponse {
  /**
   * Temporal Cloud operational metrics for your namespaces, workflows and task queues, such as workflow and activity rates, task polling, and service request latency, collected from Temporal Cloud's OpenMetrics endpoint. This is the integration's only collection: it is always on and cannot be turned off, which is why it appears in responses only.
   */
  "temporalCloudOpenmetricsMetrics"?: TemporalCloudOpenMetricsMetricsIntegrationDataflowResponse;

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
    temporalCloudOpenmetricsMetrics: {
      baseName: "temporal-cloud-openmetrics-metrics",
      type: "TemporalCloudOpenMetricsMetricsIntegrationDataflowResponse",
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
    return TemporalCloudOpenMetricsIntegrationDataflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
