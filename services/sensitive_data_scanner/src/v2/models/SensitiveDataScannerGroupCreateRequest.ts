import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerGroupCreate } from "./SensitiveDataScannerGroupCreate";
import { SensitiveDataScannerMetaVersionOnly } from "./SensitiveDataScannerMetaVersionOnly";

/**
 * Create group request.
 */
export class SensitiveDataScannerGroupCreateRequest {
  /**
   * Data related to the creation of a group.
   */
  "data"?: SensitiveDataScannerGroupCreate;
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
      type: "SensitiveDataScannerGroupCreate",
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
    return SensitiveDataScannerGroupCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
