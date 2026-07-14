import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The search filter for the query.
 */
export class DashboardAvailableValuesEventsQuerySearch {
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
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardAvailableValuesEventsQuerySearch.attributeTypeMap;
  }

  public constructor() {}
}
