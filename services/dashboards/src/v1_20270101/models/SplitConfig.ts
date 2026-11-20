import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CalendarShiftSplitConfig } from "./CalendarShiftSplitConfig";
import { SplitConfigSort } from "./SplitConfigSort";
import { SplitDimension } from "./SplitDimension";
import { SplitVectorTagFilter } from "./SplitVectorTagFilter";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SplitConfig {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "calendarShift"?: CalendarShiftSplitConfig;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit": number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort": SplitConfigSort;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "splitDimensions": Array<SplitDimension>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "staticSplits"?: Array<Array<SplitVectorTagFilter>>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    calendarShift: {
      baseName: "calendar_shift",
      type: "CalendarShiftSplitConfig",
    },
    limit: {
      baseName: "limit",
      type: "number",
      required: true,
      format: "double",
    },
    sort: {
      baseName: "sort",
      type: "SplitConfigSort",
      required: true,
    },
    splitDimensions: {
      baseName: "split_dimensions",
      type: "Array<SplitDimension>",
      required: true,
    },
    staticSplits: {
      baseName: "static_splits",
      type: "Array<Array<SplitVectorTagFilter>>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SplitConfig.attributeTypeMap;
  }

  public constructor() {}
}
