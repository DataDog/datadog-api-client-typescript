/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomAttributeType } from "./CustomAttributeType";
import { CustomAttributeValuesUnion } from "./CustomAttributeValuesUnion";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A typed value for a custom attribute on a specific case.
 */
export class CustomAttributeValue {
  /**
   * If true, value must be an array
   */
  "isMulti": boolean;
  /**
   * The data type of the custom attribute, which determines the allowed values and UI input control.
   */
  "type": CustomAttributeType;
  /**
   * The value of a custom attribute. The accepted format depends on the attribute's type and whether it accepts multiple values.
   */
  "value": CustomAttributeValuesUnion;

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
    isMulti: {
      baseName: "is_multi",
      type: "boolean",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomAttributeType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "CustomAttributeValuesUnion",
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
    return CustomAttributeValue.attributeTypeMap;
  }

  public constructor() {}
}
