/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NumberFormatUnitCustomType } from "./NumberFormatUnitCustomType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Custom unit.
 */
export class NumberFormatUnitCustom {
  /**
   * The label for the custom unit.
   */
  "label"?: string;
  /**
   * The type of custom unit.
   */
  "type"?: NumberFormatUnitCustomType;

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
    label: {
      baseName: "label",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "NumberFormatUnitCustomType",
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
    return NumberFormatUnitCustom.attributeTypeMap;
  }

  public constructor() {}
}
