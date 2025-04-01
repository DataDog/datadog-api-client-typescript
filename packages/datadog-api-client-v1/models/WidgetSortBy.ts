/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetSortOrderBy } from "./WidgetSortOrderBy";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The controls for sorting the widget.
*/
export class WidgetSortBy {
  /**
   * The number of items to limit the widget to.
  */
  "count"?: number;
  /**
   * The array of items to sort the widget by in order.
  */
  "orderBy"?: Array<WidgetSortOrderBy>;

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
    "count": {
      "baseName": "count",
      "type": "number",
      "format": "int64",
    },
    "orderBy": {
      "baseName": "order_by",
      "type": "Array<WidgetSortOrderBy>",
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




    return WidgetSortBy.attributeTypeMap;

  }

  public constructor() {











  }
}









