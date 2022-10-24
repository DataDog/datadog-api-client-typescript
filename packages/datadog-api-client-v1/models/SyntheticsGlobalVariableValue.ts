/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Value of the global variable.
 */
export class SyntheticsGlobalVariableValue {
  /**
   * Determines if the value of the variable is hidden.
   */
  "secure"?: boolean;
  /**
   * Value of the global variable. When reading a global variable,
   * the value will not be present if the variable is hidden with the `secure` property.
   */
  "value"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    secure: {
      baseName: "secure",
      type: "boolean",
    },
    value: {
      baseName: "value",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsGlobalVariableValue.attributeTypeMap;
  }

  public constructor() {}
}
