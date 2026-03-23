import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyQueryDataStreamsOrServiceMapDataSource } from "./TopologyQueryDataStreamsOrServiceMapDataSource";

/**
 * Query to service-based topology data sources like the service map or data streams.
 */
export class TopologyQueryDataStreamsOrServiceMap {
  /**
   * Name of the data source
   */
  "dataSource": TopologyQueryDataStreamsOrServiceMapDataSource;
  /**
   * Your environment and primary tag (or * if enabled for your account).
   */
  "filters": Array<string>;
  /**
   * A search string for filtering services, used in `data_streams` queries only. When set, this replaces the `service` field
   */
  "queryString"?: string;
  /**
   * Name of the service
   */
  "service"?: string;
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
    dataSource: {
      baseName: "data_source",
      type: "TopologyQueryDataStreamsOrServiceMapDataSource",
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
    return TopologyQueryDataStreamsOrServiceMap.attributeTypeMap;
  }

  public constructor() {}
}
