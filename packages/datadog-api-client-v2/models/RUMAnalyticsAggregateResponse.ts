/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMAggregationBucketsResponse } from "./RUMAggregationBucketsResponse";
import { RUMResponseLinks } from "./RUMResponseLinks";
import { RUMResponseMetadata } from "./RUMResponseMetadata";

import { HttpFile } from "../../datadog-api-client-common/http/http";

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
    "data": {
      "baseName": "data",
      "type": "RUMAggregationBucketsResponse",
    },
    "links": {
      "baseName": "links",
      "type": "RUMResponseLinks",
    },
    "meta": {
      "baseName": "meta",
      "type": "RUMResponseMetadata",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return RUMAnalyticsAggregateResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









