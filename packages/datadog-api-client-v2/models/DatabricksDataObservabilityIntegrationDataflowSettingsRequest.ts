/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings of the Databricks data observability dataflow. Only the fields provided are changed.
 */
export class DatabricksDataObservabilityIntegrationDataflowSettingsRequest {
  /**
   * Cron expression setting how often the data observability crawlers run.
   */
  "doCrawlersCron"?: string;
  /**
   * Whether the Databricks `system` catalog is synchronized alongside your data catalogs.
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
    return DatabricksDataObservabilityIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
