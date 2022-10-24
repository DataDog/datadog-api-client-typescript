/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HourlyUsagePagination } from "./HourlyUsagePagination";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The object containing document metadata.
 */
export class HourlyUsageMetadata {
  /**
   * The metadata for the current pagination.
   */
  "pagination"?: HourlyUsagePagination;

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
      type: "HourlyUsagePagination",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HourlyUsageMetadata.attributeTypeMap;
  }

  public constructor() {}
}
