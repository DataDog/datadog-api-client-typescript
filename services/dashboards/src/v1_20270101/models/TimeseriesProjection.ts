import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesProjectionDimensionsItems } from "./TimeseriesProjectionDimensionsItems";
import { TimeseriesProjectionType } from "./TimeseriesProjectionType";

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
