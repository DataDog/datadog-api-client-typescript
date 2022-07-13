/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricBulkTagConfigStatus } from "./MetricBulkTagConfigStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Wrapper for a single bulk tag configuration status response.
 */
export class MetricBulkTagConfigResponse {
  /**
   * The status of a request to bulk configure metric tags.
   * It contains the fields from the original request for reference.
   */
  "data"?: MetricBulkTagConfigStatus;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "MetricBulkTagConfigStatus",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricBulkTagConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
