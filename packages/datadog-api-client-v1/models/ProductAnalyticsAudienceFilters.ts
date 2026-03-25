/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsAudienceAccountSubquery } from "./ProductAnalyticsAudienceAccountSubquery";
import { ProductAnalyticsAudienceSegmentSubquery } from "./ProductAnalyticsAudienceSegmentSubquery";
import { ProductAnalyticsAudienceUserSubquery } from "./ProductAnalyticsAudienceUserSubquery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Product Analytics/RUM audience filters.
 */
export class ProductAnalyticsAudienceFilters {
  "accounts"?: Array<ProductAnalyticsAudienceAccountSubquery>;
  "filterCondition"?: string;
  "segments"?: Array<ProductAnalyticsAudienceSegmentSubquery>;
  "users"?: Array<ProductAnalyticsAudienceUserSubquery>;

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
    accounts: {
      baseName: "accounts",
      type: "Array<ProductAnalyticsAudienceAccountSubquery>",
    },
    filterCondition: {
      baseName: "filter_condition",
      type: "string",
    },
    segments: {
      baseName: "segments",
      type: "Array<ProductAnalyticsAudienceSegmentSubquery>",
    },
    users: {
      baseName: "users",
      type: "Array<ProductAnalyticsAudienceUserSubquery>",
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
    return ProductAnalyticsAudienceFilters.attributeTypeMap;
  }

  public constructor() {}
}
