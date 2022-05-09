/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Series } from "./Series";

import { AttributeTypeMap } from "../util";

/**
 * The metrics' payload.
 */
export class MetricsPayload {
  /**
   * A list of time series to submit to Datadog.
   */
  "series": Array<Series>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    series: {
      baseName: "series",
      type: "Array<Series>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricsPayload.attributeTypeMap;
  }

  public constructor() {}
}
