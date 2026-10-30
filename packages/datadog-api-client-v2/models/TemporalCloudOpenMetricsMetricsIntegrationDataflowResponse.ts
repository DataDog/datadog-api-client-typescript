/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Temporal Cloud operational metrics for your namespaces, workflows and task queues, such as workflow and activity rates, task polling, and service request latency, collected from Temporal Cloud's OpenMetrics endpoint. This is the integration's only collection: it is always on and cannot be turned off, which is why it appears in responses only.
 */
export class TemporalCloudOpenMetricsMetricsIntegrationDataflowResponse {
  /**
   * Whether Datadog collects this data. Always `true`, because this collection cannot be turned off.
   */
  "enabled"?: boolean;
  /**
   * Read-only collection status of a dataflow.
   */
  "status"?: IntegrationAccountDataflowStatus;

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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    status: {
      baseName: "status",
      type: "IntegrationAccountDataflowStatus",
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
    return TemporalCloudOpenMetricsMetricsIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
