/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings of the account usage metrics dataflow.
 */
export class SnowflakeAccountUsageMetricsIntegrationDataflowSettingsResponse {
  /**
   * Period each metric aggregates over. When `true`, metrics aggregate the past 24 hours on a rolling basis; when `false`, they aggregate the current day so far.
   */
  "accountUsageMetricsAggregateLast24h"?: boolean;

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
    accountUsageMetricsAggregateLast24h: {
      baseName: "account_usage_metrics_aggregate_last_24h",
      type: "boolean",
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
    return SnowflakeAccountUsageMetricsIntegrationDataflowSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
