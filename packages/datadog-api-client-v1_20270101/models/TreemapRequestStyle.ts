/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TreemapRequestStylePalette } from "./TreemapRequestStylePalette";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TreemapRequestStyle {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette"?: TreemapRequestStylePalette;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    palette: {
      baseName: "palette",
      type: "TreemapRequestStylePalette",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TreemapRequestStyle.attributeTypeMap;
  }

  public constructor() {}
}
