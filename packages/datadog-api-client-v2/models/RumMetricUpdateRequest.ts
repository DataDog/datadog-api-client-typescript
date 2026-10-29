/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumMetricUpdateData } from "./RumMetricUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The RUM-based metric update body.
 */
export class RumMetricUpdateRequest {
  /**
   * The RUM-based metric properties to update. `id` is required by the API and must match the `metric_id` path parameter.
   */
  "data": RumMetricUpdateData;

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
      type: "RumMetricUpdateData",
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
    return RumMetricUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
