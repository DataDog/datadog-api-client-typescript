/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings of the Data Observability dataflow. Only the fields provided are changed.
 */
export class DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest {
  /**
   * Cron expression setting how often Datadog connects to your Databricks warehouse to collect metadata. Currently, only hourly (`0 * * * *`) and daily (`0 0 * * *`) are supported. Defaults to hourly.
   */
  "doCrawlersCron"?: string;
  /**
   * Whether metadata from the Databricks `system` catalog is included in Data Observability alongside your data catalogs. Defaults to `false`.
   */
  "syncSystemCatalog"?: boolean;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    doCrawlersCron: {
      baseName: "do_crawlers_cron",
      type: "string",
    },
    syncSystemCatalog: {
      baseName: "sync_system_catalog",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
