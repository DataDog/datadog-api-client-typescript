/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings of the Data Observability dataflow.
 */
export class SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse {
  /**
   * Cron expression setting how often Datadog crawls your Snowflake table metadata.
   */
  "doTableCrawlerCron"?: string;
  /**
   * Whether metadata from the Snowflake `SNOWFLAKE` system database is included in Data Observability alongside your own databases.
   */
  "syncSnowflakeSystemDatabase"?: boolean;

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
    doTableCrawlerCron: {
      baseName: "do_table_crawler_cron",
      type: "string",
    },
    syncSnowflakeSystemDatabase: {
      baseName: "sync_snowflake_system_database",
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
    return SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
