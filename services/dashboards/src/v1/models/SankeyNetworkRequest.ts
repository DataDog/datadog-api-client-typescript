import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SankeyNetworkQuery } from "./SankeyNetworkQuery";
import { SankeyNetworkRequestType } from "./SankeyNetworkRequestType";

/**
 * Sankey widget request for network data source.
 */
export class SankeyNetworkRequest {
  /**
   * Query configuration for Sankey network widget.
   */
  "query": SankeyNetworkQuery;
  /**
   * Type of request for network Sankey widget.
   */
  "requestType": SankeyNetworkRequestType;
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
      type: "SankeyNetworkQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "SankeyNetworkRequestType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SankeyNetworkRequest.attributeTypeMap;
  }

  public constructor() {}
}
