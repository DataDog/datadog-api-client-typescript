/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SunburstWidgetLegendTableType } from "./SunburstWidgetLegendTableType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration of table-based legend.
 */
export class SunburstWidgetLegendTable {
  /**
   * Whether or not to show a table legend.
   */
  "type": SunburstWidgetLegendTableType;

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
    type: {
      baseName: "type",
      type: "SunburstWidgetLegendTableType",
      required: true,
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
    return SunburstWidgetLegendTable.attributeTypeMap;
  }

  public constructor() {}
}
