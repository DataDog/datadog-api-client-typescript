/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SankeyNetworkQuery } from "./SankeyNetworkQuery";
import { SankeyNetworkRequestType } from "./SankeyNetworkRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
