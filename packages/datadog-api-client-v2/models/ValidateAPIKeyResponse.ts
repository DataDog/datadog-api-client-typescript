/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ValidateAPIKeyStatus } from "./ValidateAPIKeyStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object for the API and application key validation status check.
 */
export class ValidateAPIKeyResponse {
  /**
   * Status of the validation. Always `ok` when both the API key and the application key are valid.
   */
  "status": ValidateAPIKeyStatus;

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
    status: {
      baseName: "status",
      type: "ValidateAPIKeyStatus",
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
    return ValidateAPIKeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
