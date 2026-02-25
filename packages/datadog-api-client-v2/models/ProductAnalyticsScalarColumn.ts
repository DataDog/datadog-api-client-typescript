/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsScalarColumnMeta } from "./ProductAnalyticsScalarColumnMeta";
import { ProductAnalyticsScalarColumnType } from "./ProductAnalyticsScalarColumnType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A column in a scalar response.
 */
export class ProductAnalyticsScalarColumn {
  "meta"?: ProductAnalyticsScalarColumnMeta;
  /**
   * Column name (facet name for group-by, or "query").
   */
  "name"?: string;
  /**
   * Column type.
   */
  "type"?: ProductAnalyticsScalarColumnType;
  /**
   * Column values.
   */
  "values"?: Array<any>;

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
    meta: {
      baseName: "meta",
      type: "ProductAnalyticsScalarColumnMeta",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsScalarColumnType",
    },
    values: {
      baseName: "values",
      type: "Array<any>",
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
    return ProductAnalyticsScalarColumn.attributeTypeMap;
  }

  public constructor() {}
}
