/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMAggregationBucketsResponse } from "./RUMAggregationBucketsResponse";
import { RUMResponseLinks } from "./RUMResponseLinks";
import { RUMResponseMetadata } from "./RUMResponseMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response object for the RUM events aggregate API endpoint.
 */
export class RUMAnalyticsAggregateResponse {
  /**
   * The query results.
   */
  "data"?: RUMAggregationBucketsResponse;
  /**
   * Links attributes.
   */
  "links"?: RUMResponseLinks;
  /**
   * The metadata associated with a request.
   */
  "meta"?: RUMResponseMetadata;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "RUMAggregationBucketsResponse",
    },
    links: {
      baseName: "links",
      type: "RUMResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "RUMResponseMetadata",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMAnalyticsAggregateResponse.attributeTypeMap;
  }

  public constructor() {}
}
