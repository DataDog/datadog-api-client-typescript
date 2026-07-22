import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Available values query for the metrics data source.
 */
export class NotebookTemplateVariableAvailableValuesQueryMetrics {
  /**
   * The data source for the query. Must be `metrics`.
   */
  "dataSource": string;
  /**
   * The metrics query string.
   */
  "query": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dataSource: {
      baseName: "data_source",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookTemplateVariableAvailableValuesQueryMetrics.attributeTypeMap;
  }

  public constructor() {}
}
