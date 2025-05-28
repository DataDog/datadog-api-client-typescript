/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { QuerySortOrder } from "./QuerySortOrder";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Message for specifying limits to the number of values returned by a query.
 * This limit is only for scalar queries and has no effect on timeseries queries.
*/
export class FormulaLimit {
  /**
   * The number of results to which to limit.
  */
  "count"?: number;
  /**
   * Direction of sort.
  */
  "order"?: QuerySortOrder;

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
      "format": "int32",
    },
    "order": {
      "baseName": "order",
      "type": "QuerySortOrder",
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




    return FormulaLimit.attributeTypeMap;

  }

  public constructor() {











  }
}









