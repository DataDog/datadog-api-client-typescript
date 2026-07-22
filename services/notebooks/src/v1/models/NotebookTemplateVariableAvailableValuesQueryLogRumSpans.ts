import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookTemplateVariableAvailableValuesQueryGroupBy } from "./NotebookTemplateVariableAvailableValuesQueryGroupBy";
import { NotebookTemplateVariableAvailableValuesQuerySearch } from "./NotebookTemplateVariableAvailableValuesQuerySearch";

/**
 * Available values query for logs, RUM, or spans data sources.
 */
export class NotebookTemplateVariableAvailableValuesQueryLogRumSpans {
  /**
   * The data source for the query. Must be one of `logs`, `rum`, or `spans`.
   */
  "dataSource": string;
  /**
   * Group-by fields for the query.
   */
  "groupBy": Array<NotebookTemplateVariableAvailableValuesQueryGroupBy>;
  /**
   * Search parameters for an available values query.
   */
  "search": NotebookTemplateVariableAvailableValuesQuerySearch;
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
    groupBy: {
      baseName: "group_by",
      type: "Array<NotebookTemplateVariableAvailableValuesQueryGroupBy>",
      required: true,
    },
    search: {
      baseName: "search",
      type: "NotebookTemplateVariableAvailableValuesQuerySearch",
      required: true,
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookTemplateVariableAvailableValuesQueryLogRumSpans.attributeTypeMap;
  }

  public constructor() {}
}
