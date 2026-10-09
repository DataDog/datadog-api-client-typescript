/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridLabelColumnWidth } from "./HeatgridLabelColumnWidth";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration of the group label column.
 */
export class HeatgridLabelColumn {
  /**
   * Width of the label column.
   */
  "width": HeatgridLabelColumnWidth;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    width: {
      baseName: "width",
      type: "HeatgridLabelColumnWidth",
      required: true,
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
