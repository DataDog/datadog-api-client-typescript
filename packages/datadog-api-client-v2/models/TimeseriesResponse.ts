/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesFormulaResponseType } from "./TimeseriesFormulaResponseType";
import { TimeseriesResponseAttributes } from "./TimeseriesResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A message containing the response to a timeseries query.
 */
export class TimeseriesResponse {
  /**
   * The object describing a timeseries response.
   */
  "attributes"?: TimeseriesResponseAttributes;
  /**
   * The type of the resource. The value should always be timeseries_response.
   */
  "type"?: TimeseriesFormulaResponseType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "TimeseriesResponseAttributes",
    },
    type: {
      baseName: "type",
      type: "TimeseriesFormulaResponseType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesResponse.attributeTypeMap;
  }

  public constructor() {}
}
