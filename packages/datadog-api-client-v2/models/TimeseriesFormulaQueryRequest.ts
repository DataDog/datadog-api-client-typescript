/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesFormulaRequest } from "./TimeseriesFormulaRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A request wrapper around a single timeseries query to be executed.
 */
export class TimeseriesFormulaQueryRequest {
  /**
   * A single timeseries query to be executed.
   */
  "data": TimeseriesFormulaRequest;

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
      type: "TimeseriesFormulaRequest",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesFormulaQueryRequest.attributeTypeMap;
  }

  public constructor() {}
}
