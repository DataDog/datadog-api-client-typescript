/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The metadata for the current pagination.
*/
export class UsageTopAvgMetricsPagination {
  /**
   * Maximum amount of records to be returned.
  */
  "limit"?: number;
  /**
   * The cursor to get the next results (if any). To make the next request, use the same parameters and add `next_record_id`.
  */
  "nextRecordId"?: string;
  /**
   * Total number of records.
  */
  "totalNumberOfRecords"?: number;

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
    "limit": {
      "baseName": "limit",
      "type": "number",
      "format": "int64",
    },
    "nextRecordId": {
      "baseName": "next_record_id",
      "type": "string",
    },
    "totalNumberOfRecords": {
      "baseName": "total_number_of_records",
      "type": "number",
      "format": "int64",
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




    return UsageTopAvgMetricsPagination.attributeTypeMap;

  }

  public constructor() {











  }
}









