/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsGlobalVariableOptions } from "./SyntheticsGlobalVariableOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Value of the global variable.
 */
export class SyntheticsGlobalVariableValue {
  /**
   * Options for the Global Variable for MFA.
   */
  "options"?: SyntheticsGlobalVariableOptions;
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
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    options: {
      type: "SyntheticsGlobalVariableOptions",
    },
    secure: {
      type: "boolean",
    },
    value: {
      type: "string",
    },
  };
}
