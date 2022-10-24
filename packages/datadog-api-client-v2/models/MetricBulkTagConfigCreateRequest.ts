/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricBulkTagConfigCreate } from "./MetricBulkTagConfigCreate";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Wrapper object for a single bulk tag configuration request.
 */
export class MetricBulkTagConfigCreateRequest {
  /**
   * Request object to bulk configure tags for metrics matching the given prefix.
   */
  "data": MetricBulkTagConfigCreate;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "MetricBulkTagConfigCreate",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricBulkTagConfigCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
