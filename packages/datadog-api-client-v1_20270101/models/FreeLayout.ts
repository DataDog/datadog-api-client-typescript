/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FreeLayout {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "height"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "width"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "x": number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "y": number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    height: {
      baseName: "height",
      type: "number",
      format: "double",
    },
    width: {
      baseName: "width",
      type: "number",
      format: "double",
    },
    x: {
      baseName: "x",
      type: "number",
      required: true,
      format: "double",
    },
    y: {
      baseName: "y",
      type: "number",
      required: true,
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FreeLayout.attributeTypeMap;
  }

  public constructor() {}
}
