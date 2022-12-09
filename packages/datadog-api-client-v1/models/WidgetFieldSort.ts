/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetSort } from "./WidgetSort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Which column and order to sort by
 */
export class WidgetFieldSort {
  /**
   * Facet path for the column
   */
  "column": string;
  /**
   * Widget sorting methods.
   */
  "order": WidgetSort;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    order: {
      baseName: "order",
      type: "WidgetSort",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetFieldSort.attributeTypeMap;
  }

  public constructor() {}
}
