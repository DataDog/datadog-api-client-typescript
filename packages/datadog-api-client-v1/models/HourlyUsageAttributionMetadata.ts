/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HourlyUsageAttributionPagination } from "./HourlyUsageAttributionPagination";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object containing document metadata.
 */
export class HourlyUsageAttributionMetadata {
  /**
   * The metadata for the current pagination.
   */
  "pagination"?: HourlyUsageAttributionPagination;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    pagination: {
      baseName: "pagination",
      type: "HourlyUsageAttributionPagination",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HourlyUsageAttributionMetadata.attributeTypeMap;
  }

  public constructor() {}
}
