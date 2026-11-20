/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesProjectionDimensionsItems } from "./TimeseriesProjectionDimensionsItems";
import { TimeseriesProjectionType } from "./TimeseriesProjectionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TimeseriesProjection {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimensions": Array<TimeseriesProjectionDimensionsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TimeseriesProjectionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dimensions: {
      baseName: "dimensions",
      type: "Array<TimeseriesProjectionDimensionsItems>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TimeseriesProjectionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesProjection.attributeTypeMap;
  }

  public constructor() {}
}
