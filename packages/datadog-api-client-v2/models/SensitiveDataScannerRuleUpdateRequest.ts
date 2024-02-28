/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerMetaVersionOnly } from "./SensitiveDataScannerMetaVersionOnly";
import { SensitiveDataScannerRuleUpdate } from "./SensitiveDataScannerRuleUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Update rule request.
 */
export class SensitiveDataScannerRuleUpdateRequest {
  /**
   * Data related to the update of a rule.
   */
  "data": SensitiveDataScannerRuleUpdate;
  /**
   * Meta payload containing information about the API.
   */
  "meta": SensitiveDataScannerMetaVersionOnly;

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
      type: "SensitiveDataScannerRuleUpdate",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SensitiveDataScannerMetaVersionOnly",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
