/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionListColumnField } from "./ProductAnalyticsRetentionListColumnField";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A column to include in each returned entity row.
 */
export class ProductAnalyticsRetentionListColumn {
  /**
   * The attribute selected for a column.
   */
  "field"?: ProductAnalyticsRetentionListColumnField;

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
    field: {
      baseName: "field",
      type: "ProductAnalyticsRetentionListColumnField",
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
    return ProductAnalyticsRetentionListColumn.attributeTypeMap;
  }

  public constructor() {}
}
