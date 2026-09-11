/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings of the Data Observability dataflow. Only the fields provided are changed.
 */
export class SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest {
  /**
   * Cron expression setting how often Datadog crawls your Snowflake table metadata. It takes the five standard fields, with the restriction that the month must be `*` and that the day of the month and the day of the week cannot both be constrained. The Datadog UI offers hourly (`0 * * * *`) and daily (`0 0 * * *`). Defaults to hourly.
   */
  "doTableCrawlerCron"?: string;
  /**
   * Whether metadata from the Snowflake `SNOWFLAKE` system database is included in Data Observability alongside your own databases. Defaults to `true`.
   */
  "syncSnowflakeSystemDatabase"?: boolean;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    doTableCrawlerCron: {
      baseName: "do_table_crawler_cron",
      type: "string",
    },
    syncSnowflakeSystemDatabase: {
      baseName: "sync_snowflake_system_database",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
