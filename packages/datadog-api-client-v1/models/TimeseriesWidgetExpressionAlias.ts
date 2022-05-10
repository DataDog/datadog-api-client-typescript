/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Define an expression alias.
 */
export class TimeseriesWidgetExpressionAlias {
  /**
   * Expression alias.
   */
  "aliasName"?: string;
  /**
   * Expression name.
   */
  "expression": string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aliasName: {
      baseName: "alias_name",
      type: "string",
    },
    expression: {
      baseName: "expression",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesWidgetExpressionAlias.attributeTypeMap;
  }

  public constructor() {}
}
