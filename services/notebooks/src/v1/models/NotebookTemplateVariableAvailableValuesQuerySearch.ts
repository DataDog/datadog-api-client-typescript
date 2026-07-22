import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Search parameters for an available values query.
 */
export class NotebookTemplateVariableAvailableValuesQuerySearch {
  /**
   * The search query string.
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
    return NotebookTemplateVariableAvailableValuesQuerySearch.attributeTypeMap;
  }

  public constructor() {}
}
