/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetNewFixedSpanType } from "./WidgetNewFixedSpanType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WidgetTime20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "from": number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hideIncompleteCostData"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "to": number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": WidgetNewFixedSpanType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "double",
    },
    hideIncompleteCostData: {
      baseName: "hide_incomplete_cost_data",
      type: "boolean",
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "double",
    },
    type: {
      baseName: "type",
      type: "WidgetNewFixedSpanType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetTime20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
