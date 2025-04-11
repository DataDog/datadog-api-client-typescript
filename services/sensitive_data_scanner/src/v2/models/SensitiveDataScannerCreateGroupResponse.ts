import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerGroupResponse } from "./SensitiveDataScannerGroupResponse";
import { SensitiveDataScannerMetaVersionOnly } from "./SensitiveDataScannerMetaVersionOnly";

/**
 * Create group response.
 */
export class SensitiveDataScannerCreateGroupResponse {
  /**
   * Response data related to the creation of a group.
   */
  "data"?: SensitiveDataScannerGroupResponse;
  /**
   * Meta payload containing information about the API.
   */
  "meta"?: SensitiveDataScannerMetaVersionOnly;
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
      type: "SensitiveDataScannerMetaVersionOnly",
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
