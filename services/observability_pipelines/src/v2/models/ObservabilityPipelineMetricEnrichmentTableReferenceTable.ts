import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineMetricEnrichmentTableReferenceKey } from "./ObservabilityPipelineMetricEnrichmentTableReferenceKey";

/**
 * Uses a Datadog reference table to enrich metrics.
 */
export class ObservabilityPipelineMetricEnrichmentTableReferenceTable {
  /**
   * The name of the environment variable or secret that holds the Datadog application key used to access the
   * reference table.
   */
  "appKeyKey"?: string;
  /**
   * A list of column names to include from the reference table. If not provided, all columns are included.
   */
  "columns"?: Array<string>;
  /**
   * Defines the metric lookup value used as the reference-table row ID.
   */
  "key": ObservabilityPipelineMetricEnrichmentTableReferenceKey;
  /**
   * The unique identifier of the reference table.
   */
  "tableId": string;
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
    appKeyKey: {
      baseName: "app_key_key",
      type: "string",
    },
    columns: {
      baseName: "columns",
      type: "Array<string>",
    },
    key: {
      baseName: "key",
      type: "ObservabilityPipelineMetricEnrichmentTableReferenceKey",
      required: true,
    },
    tableId: {
      baseName: "table_id",
      type: "string",
      required: true,
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
    return ObservabilityPipelineMetricEnrichmentTableReferenceTable.attributeTypeMap;
  }

  public constructor() {}
}
