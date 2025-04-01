/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostAttributionAggregatesBody } from "./CostAttributionAggregatesBody";
import { MonthlyCostAttributionPagination } from "./MonthlyCostAttributionPagination";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The object containing document metadata.
*/
export class MonthlyCostAttributionMeta {
  /**
   * An array of available aggregates.
  */
  "aggregates"?: Array<CostAttributionAggregatesBody>;
  /**
   * The metadata for the current pagination.
  */
  "pagination"?: MonthlyCostAttributionPagination;

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
    "aggregates": {
      "baseName": "aggregates",
      "type": "Array<CostAttributionAggregatesBody>",
    },
    "pagination": {
      "baseName": "pagination",
      "type": "MonthlyCostAttributionPagination",
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




    return MonthlyCostAttributionMeta.attributeTypeMap;

  }

  public constructor() {











  }
}









