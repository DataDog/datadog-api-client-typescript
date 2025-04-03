import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Events association item.
 */
export class EntityV3DatadogEventItem {
  /**
   * The name of the query.
   */
  "name"?: string;
  /**
   * The query to run.
   */
  "query"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3DatadogEventItem.attributeTypeMap;
  }

  public constructor() {}
}
