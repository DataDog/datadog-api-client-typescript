/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsAnalyticsListSortOrder } from "./ProductAnalyticsAnalyticsListSortOrder";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The sort applied to the returned event rows.
 */
export class ProductAnalyticsAnalyticsListSort {
  /**
   * Name of the facet to sort the rows by.
   */
  "facet"?: string;
  /**
   * The direction rows are sorted in.
   */
  "order"?: ProductAnalyticsAnalyticsListSortOrder;

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
    facet: {
      baseName: "facet",
      type: "string",
    },
    order: {
      baseName: "order",
      type: "ProductAnalyticsAnalyticsListSortOrder",
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
    return ProductAnalyticsAnalyticsListSort.attributeTypeMap;
  }

  public constructor() {}
}
