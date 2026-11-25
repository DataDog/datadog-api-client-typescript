import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConditionalFormats } from "./ConditionalFormats";
import { NumberBarTableColumnFormatMode } from "./NumberBarTableColumnFormatMode";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class NumberBarTableColumnFormat {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: ConditionalFormats;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "mode": NumberBarTableColumnFormatMode;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numberFormat"?: WidgetNumberFormat;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
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
      type: "NumberBarTableColumnFormatMode",
      required: true,
    },
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NumberBarTableColumnFormat.attributeTypeMap;
  }

  public constructor() {}
}
