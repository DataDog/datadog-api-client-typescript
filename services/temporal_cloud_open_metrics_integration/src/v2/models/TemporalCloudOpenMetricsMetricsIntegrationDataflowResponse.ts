import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";

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
