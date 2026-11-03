/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridLabelColumnWidth } from "./HeatgridLabelColumnWidth";
import { HeatgridTextFormatRule } from "./HeatgridTextFormatRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration of the group label column. Its width is sized automatically when omitted.
 */
export class HeatgridLabelColumn {
  /**
   * Ordered string replacement rules for the group labels.
   */
  "textFormats"?: Array<HeatgridTextFormatRule>;
  /**
   * Width of the label column.
   */
  "width"?: HeatgridLabelColumnWidth;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    textFormats: {
      baseName: "text_formats",
      type: "Array<HeatgridTextFormatRule>",
    },
    width: {
      baseName: "width",
      type: "HeatgridLabelColumnWidth",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridLabelColumn.attributeTypeMap;
  }

  public constructor() {}
}
