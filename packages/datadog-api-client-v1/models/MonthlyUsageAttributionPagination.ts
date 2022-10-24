/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The metadata for the current pagination.
 */
export class MonthlyUsageAttributionPagination {
  /**
   * The cursor to use to get the next results, if any. To make the next request, use the same parameters with the addition of the `next_record_id`.
   */
  "nextRecordId"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    nextRecordId: {
      baseName: "next_record_id",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonthlyUsageAttributionPagination.attributeTypeMap;
  }

  public constructor() {}
}
