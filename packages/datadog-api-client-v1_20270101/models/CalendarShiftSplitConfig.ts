/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CalendarShift } from "./CalendarShift";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CalendarShiftSplitConfig {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "shifts": Array<CalendarShift>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    shifts: {
      baseName: "shifts",
      type: "Array<CalendarShift>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CalendarShiftSplitConfig.attributeTypeMap;
  }

  public constructor() {}
}
