/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageTopAvgMetricsPagination } from "./UsageTopAvgMetricsPagination";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The object containing document metadata.
*/
export class UsageTopAvgMetricsMetadata {
  /**
   * The day value from the user request that contains the returned usage data. (If day was used the request)
  */
  "day"?: Date;
  /**
   * The month value from the user request that contains the returned usage data. (If month was used the request)
  */
  "month"?: Date;
  /**
   * The metadata for the current pagination.
  */
  "pagination"?: UsageTopAvgMetricsPagination;

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
    "day": {
      "baseName": "day",
      "type": "Date",
      "format": "date-time",
    },
    "month": {
      "baseName": "month",
      "type": "Date",
      "format": "date-time",
    },
    "pagination": {
      "baseName": "pagination",
      "type": "UsageTopAvgMetricsPagination",
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




    return UsageTopAvgMetricsMetadata.attributeTypeMap;

  }

  public constructor() {











  }
}









