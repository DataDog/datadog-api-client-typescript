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
 * Paging settings
 */
export class LogsAggregateRequestPage {
  /**
   * The returned paging point to use to get the next results
   */
  "cursor"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cursor: {
      baseName: "cursor",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsAggregateRequestPage.attributeTypeMap;
  }

  public constructor() {}
}
