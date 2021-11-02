/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsAssertionOperator } from "./SyntheticsAssertionOperator";
import { SyntheticsAssertionType } from "./SyntheticsAssertionType";

export class SyntheticsAssertionTarget {
  "operator": SyntheticsAssertionOperator;
  /**
   * The associated assertion property.
   */
  "property"?: string;
  /**
   * Value used by the operator.
   */
  "target"?: any;
  "type": SyntheticsAssertionType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    operator: {
      baseName: "operator",
      type: "SyntheticsAssertionOperator",
      required: true,
    },
    property: {
      baseName: "property",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "any",
    },
    type: {
      baseName: "type",
      type: "SyntheticsAssertionType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsAssertionTarget.attributeTypeMap;
  }

  public constructor() {}
}
