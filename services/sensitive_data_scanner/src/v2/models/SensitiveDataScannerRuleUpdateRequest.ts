import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerMetaVersionOnly } from "./SensitiveDataScannerMetaVersionOnly";
import { SensitiveDataScannerRuleUpdate } from "./SensitiveDataScannerRuleUpdate";

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
      type: "{ [key: string]: any; }",
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
