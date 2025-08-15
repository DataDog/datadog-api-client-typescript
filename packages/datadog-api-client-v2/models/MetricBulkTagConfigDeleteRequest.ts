/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricBulkTagConfigDelete } from "./MetricBulkTagConfigDelete";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Wrapper object for a single bulk tag deletion request.
 */
export class MetricBulkTagConfigDeleteRequest {
  /**
   * Request object to bulk delete all tag configurations for metrics matching the given prefix.
   */
  "data": MetricBulkTagConfigDelete;

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
    data: {
      baseName: "data",
      type: "MetricBulkTagConfigDelete",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricBulkTagConfigDeleteRequest.attributeTypeMap;
  }

  public constructor() {}
}
