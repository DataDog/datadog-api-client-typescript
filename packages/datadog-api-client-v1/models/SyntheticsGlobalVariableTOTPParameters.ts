/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Parameters for the TOTP/MFA variable
 */
export class SyntheticsGlobalVariableTOTPParameters {
  /**
   * Number of digits for the OTP code.
   */
  "digits"?: number;
  /**
   * Interval for which to refresh the token (in seconds).
   */
  "refreshInterval"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    digits: {
      baseName: "digits",
      type: "number",
      format: "int32",
    },
    refreshInterval: {
      baseName: "refresh_interval",
      type: "number",
      format: "int32",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsGlobalVariableTOTPParameters.attributeTypeMap;
  }

  public constructor() {}
}
