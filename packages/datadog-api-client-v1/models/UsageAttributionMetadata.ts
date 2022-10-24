/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageAttributionAggregatesBody } from "./UsageAttributionAggregatesBody";
import { UsageAttributionPagination } from "./UsageAttributionPagination";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The object containing document metadata.
 */
export class UsageAttributionMetadata {
  /**
   * An array of available aggregates.
   */
  "aggregates"?: Array<UsageAttributionAggregatesBody>;
  /**
   * The metadata for the current pagination.
   */
  "pagination"?: UsageAttributionPagination;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregates: {
      baseName: "aggregates",
      type: "Array<UsageAttributionAggregatesBody>",
    },
    pagination: {
      baseName: "pagination",
      type: "UsageAttributionPagination",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageAttributionMetadata.attributeTypeMap;
  }

  public constructor() {}
}
