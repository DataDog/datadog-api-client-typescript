/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  "_unparsed"?: boolean;

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
}
