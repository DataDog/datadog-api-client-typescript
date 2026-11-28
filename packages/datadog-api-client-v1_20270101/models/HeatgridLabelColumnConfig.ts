/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridLabelColumnWidth } from "./HeatgridLabelColumnWidth";
import { TextReplacementRule } from "./TextReplacementRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatgridLabelColumnConfig {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "textFormats"?: Array<TextReplacementRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
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
      type: "Array<TextReplacementRule>",
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
    return HeatgridLabelColumnConfig.attributeTypeMap;
  }

  public constructor() {}
}
