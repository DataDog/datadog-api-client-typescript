import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyQueryDataStreamsDataSource } from "./TopologyQueryDataStreamsDataSource";

/**
 * Query to the data streams topology data source.
 */
export class TopologyQueryDataStreams {
  /**
   * Name of the data source.
   */
  "dataSource": TopologyQueryDataStreamsDataSource;
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
      type: "TopologyQueryDataStreamsDataSource",
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
    return TopologyQueryDataStreams.attributeTypeMap;
  }

  public constructor() {}
}
