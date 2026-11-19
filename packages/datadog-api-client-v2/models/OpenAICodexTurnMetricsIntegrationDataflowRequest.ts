/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Hourly turn-level metrics from the OpenAI Compliance Logs Platform, including turn and session identity, Work Insights classification, token usage, credits, estimated cost, duration, and activity for skills, plugins, and artifacts. Turn cost is a provider estimate and can differ from invoiced charges. Requires the `chatgpt.enterprise.compliance_logs_platform.workspace_analytics.read` scope on the key in `authentication`. Without this scope, the dataflow collects no data.
 */
export class OpenAICodexTurnMetricsIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `false`. Set to `true` to start collection.
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
    return OpenAICodexTurnMetricsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
