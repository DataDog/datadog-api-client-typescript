/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsJourneyEntity } from "./ProductAnalyticsJourneyEntity";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a journey list response.
 */
export class ProductAnalyticsJourneyListResponseAttributes {
  /**
   * The kind of entity returned by a journey list query.
   */
  "entity": ProductAnalyticsJourneyEntity;
  /**
   * The returned rows.
   */
  "records": Array<{ [key: string]: any }>;
  /**
   * Total number of rows matching the query, ignoring `limit`.
   */
  "totalCount": number;

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
    entity: {
      baseName: "entity",
      type: "ProductAnalyticsJourneyEntity",
      required: true,
    },
    records: {
      baseName: "records",
      type: "Array<{ [key: string]: any; }>",
      required: true,
    },
    totalCount: {
      baseName: "total_count",
      type: "number",
      required: true,
      format: "int64",
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
    return ProductAnalyticsJourneyListResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
