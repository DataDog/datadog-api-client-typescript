/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerGroupResponse } from "./SensitiveDataScannerGroupResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create group response.
 */
export class SensitiveDataScannerCreateGroupResponse {
  /**
   * Response data related to the creation of a group.
   */
  "data"?: SensitiveDataScannerGroupResponse;
  /**
   * Meta response. Always an empty object.
   */
  "meta"?: { [key: string]: any };

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
    data: {
      baseName: "data",
      type: "SensitiveDataScannerGroupResponse",
    },
    meta: {
      baseName: "meta",
      type: "{ [key: string]: any; }",
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
    return SensitiveDataScannerCreateGroupResponse.attributeTypeMap;
  }

  public constructor() {}
}
