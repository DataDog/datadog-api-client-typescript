/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsJourneyListResponseData } from "./ProductAnalyticsJourneyListResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for a journey list query.
 */
export class ProductAnalyticsJourneyListResponse {
  /**
   * The single JSON:API resource holding the entities matching a journey. Its attributes contain
   * the returned rows and the total number of rows that matched, ignoring `limit`.
   */
  "data": ProductAnalyticsJourneyListResponseData;

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
    data: {
      baseName: "data",
      type: "ProductAnalyticsJourneyListResponseData",
      required: true,
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
    return ProductAnalyticsJourneyListResponse.attributeTypeMap;
  }

  public constructor() {}
}
