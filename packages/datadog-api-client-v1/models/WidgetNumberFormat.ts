/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NumberFormatUnit } from "./NumberFormatUnit";
import { NumberFormatUnitScale } from "./NumberFormatUnitScale";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Number format options for the widget.
 */
export class WidgetNumberFormat {
  /**
   * Number format unit.
   */
  "unit"?: NumberFormatUnit;
  /**
   * The definition of `NumberFormatUnitScale` object.
   */
  "unitScale"?: NumberFormatUnitScale;

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
    unit: {
      baseName: "unit",
      type: "NumberFormatUnit",
    },
    unitScale: {
      baseName: "unit_scale",
      type: "NumberFormatUnitScale",
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
    return WidgetNumberFormat.attributeTypeMap;
  }

  public constructor() {}
}
