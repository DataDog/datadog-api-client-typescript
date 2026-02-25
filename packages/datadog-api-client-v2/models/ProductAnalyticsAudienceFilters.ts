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
 * Audience filter definitions for targeting specific user segments.
 */
export class ProductAnalyticsAudienceFilters {
  /**
   * Account audience queries.
   */
  "accounts"?: Array<ProductAnalyticsAudienceAccountSubquery>;
  /**
   * Boolean formula combining audience queries by name.
   */
  "formula"?: string;
  /**
   * Segment audience queries.
   */
  "segments"?: Array<ProductAnalyticsAudienceSegmentSubquery>;
  /**
   * User audience queries.
   */
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
    formula: {
      baseName: "formula",
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
