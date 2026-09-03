import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the Databricks data observability dataflow.
 */
export class DatabricksDataObservabilityIntegrationDataflowSettingsResponse {
  /**
   * Cron expression setting how often the data observability crawlers run.
   */
  "doCrawlersCron"?: string;
  /**
   * Whether the Databricks `system` catalog is synchronized alongside your data catalogs.
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
    return DatabricksDataObservabilityIntegrationDataflowSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
