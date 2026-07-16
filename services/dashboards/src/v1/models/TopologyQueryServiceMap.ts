import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyQueryServiceMapDataSource } from "./TopologyQueryServiceMapDataSource";

/**
 * Query to the service map topology data source.
 */
export class TopologyQueryServiceMap {
  /**
   * Name of the data source.
   */
  "dataSource": TopologyQueryServiceMapDataSource;
  /**
   * Your environment and primary tag (or * if enabled for your account).
   */
  "filters": Array<string>;
  /**
   * A search string for filtering services. When set, this replaces the `service` field.
   */
  "queryString"?: string;
  /**
   * (deprecated) Name of the service. Leave this empty and use query_string instead.
   */
  "service": string;
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
      type: "TopologyQueryServiceMapDataSource",
      required: true,
    },
    filters: {
      baseName: "filters",
      type: "Array<string>",
      required: true,
    },
    queryString: {
      baseName: "query_string",
      type: "string",
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyQueryServiceMap.attributeTypeMap;
  }

  public constructor() {}
}
