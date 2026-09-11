import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the Data Observability dataflow.
 */
export class DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse {
  /**
   * Cron expression setting how often Datadog connects to your Databricks warehouse to collect metadata. Currently, only hourly (`0 * * * *`) and daily (`0 0 * * *`) are supported.
   */
  "doCrawlersCron"?: string;
  /**
   * Whether metadata from the Databricks `system` catalog is included in Data Observability alongside your data catalogs.
   */
  "syncSystemCatalog"?: boolean;
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
    doCrawlersCron: {
      baseName: "do_crawlers_cron",
      type: "string",
    },
    syncSystemCatalog: {
      baseName: "sync_system_catalog",
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
    return DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
