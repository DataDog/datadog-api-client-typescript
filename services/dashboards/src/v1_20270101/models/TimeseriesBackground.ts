import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Axis } from "./Axis";
import { TimeseriesBackgroundType } from "./TimeseriesBackgroundType";

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
