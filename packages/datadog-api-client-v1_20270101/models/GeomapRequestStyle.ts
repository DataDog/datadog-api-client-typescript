/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapRequestStyle {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "colorBy"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    colorBy: {
      baseName: "color_by",
      type: "string",
    },
    palette: {
      baseName: "palette",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapRequestStyle.attributeTypeMap;
  }

  public constructor() {}
}
