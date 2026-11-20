/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Axis } from "./Axis";
import { TimeseriesBackgroundType } from "./TimeseriesBackgroundType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TimeseriesBackground {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TimeseriesBackgroundType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "yaxis"?: Axis;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "TimeseriesBackgroundType",
      required: true,
    },
    yaxis: {
      baseName: "yaxis",
      type: "Axis",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesBackground.attributeTypeMap;
  }

  public constructor() {}
}
