import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConditionalFormats } from "./ConditionalFormats";
import { NumberBarTableColumnFormatBarMode } from "./NumberBarTableColumnFormatBarMode";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class NumberBarTableColumnFormatBar {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: ConditionalFormats;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "mode": NumberBarTableColumnFormatBarMode;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numberFormat"?: WidgetNumberFormat;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "ConditionalFormats",
    },
    mode: {
      baseName: "mode",
      type: "NumberBarTableColumnFormatBarMode",
      required: true,
    },
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NumberBarTableColumnFormatBar.attributeTypeMap;
  }

  public constructor() {}
}
