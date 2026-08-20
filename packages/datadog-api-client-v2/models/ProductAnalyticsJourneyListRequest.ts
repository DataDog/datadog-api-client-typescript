/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsJourneyListRequestData } from "./ProductAnalyticsJourneyListRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for a journey list query.
 */
export class ProductAnalyticsJourneyListRequest {
  /**
   * The single JSON:API resource carrying a journey list query. Its attributes hold the time window
   * and the journey whose matching entities should be listed, one row each.
   */
  "data": ProductAnalyticsJourneyListRequestData;

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
      type: "ProductAnalyticsJourneyListRequestData",
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
    return ProductAnalyticsJourneyListRequest.attributeTypeMap;
  }

  public constructor() {}
}
