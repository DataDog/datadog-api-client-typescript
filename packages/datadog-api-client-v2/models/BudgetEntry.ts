/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagFilter } from "./TagFilter";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The entry of a budget.
*/
export class BudgetEntry {
  /**
   * The `amount` of the budget entry.
  */
  "amount"?: number;
  /**
   * The `month` of the budget entry.
  */
  "month"?: number;
  /**
   * The `tag_filters` of the budget entry.
  */
  "tagFilters"?: Array<TagFilter>;

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
    "amount": {
      "baseName": "amount",
      "type": "number",
      "format": "double",
    },
    "month": {
      "baseName": "month",
      "type": "number",
      "format": "int64",
    },
    "tagFilters": {
      "baseName": "tag_filters",
      "type": "Array<TagFilter>",
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




    return BudgetEntry.attributeTypeMap;

  }

  public constructor() {











  }
}









