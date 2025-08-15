/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ToplistWidgetLegend } from "./ToplistWidgetLegend";
import { ToplistWidgetStackedType } from "./ToplistWidgetStackedType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Top list widget stacked display options.
 */
export class ToplistWidgetStacked {
  /**
   * Top list widget stacked legend behavior.
   */
  "legend"?: ToplistWidgetLegend;
  /**
   * Top list widget stacked display type.
   */
  "type": ToplistWidgetStackedType;

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
    legend: {
      baseName: "legend",
      type: "ToplistWidgetLegend",
    },
    type: {
      baseName: "type",
      type: "ToplistWidgetStackedType",
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
    return ToplistWidgetStacked.attributeTypeMap;
  }

  public constructor() {}
}
