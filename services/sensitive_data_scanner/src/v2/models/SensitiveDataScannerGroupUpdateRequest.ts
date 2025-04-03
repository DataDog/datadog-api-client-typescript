import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerGroupUpdate } from "./SensitiveDataScannerGroupUpdate";
import { SensitiveDataScannerMetaVersionOnly } from "./SensitiveDataScannerMetaVersionOnly";

/**
 * Update group request.
 */
export class SensitiveDataScannerGroupUpdateRequest {
  /**
   * Data related to the update of a group.
   */
  "data": SensitiveDataScannerGroupUpdate;
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
      type: "SensitiveDataScannerGroupUpdate",
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
    return SensitiveDataScannerGroupUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
