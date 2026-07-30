import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationResponseData } from "./RUMOperationResponseData";
import { RUMOperationsListResponseMeta } from "./RUMOperationsListResponseMeta";

/**
 * The response for a list of RUM operations.
 */
export class RUMOperationsListResponse {
  "data": Array<RUMOperationResponseData>;
  /**
   * Metadata for a list of RUM operations.
   */
  "meta"?: RUMOperationsListResponseMeta;
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
      type: "Array<RUMOperationResponseData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RUMOperationsListResponseMeta",
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
    return RUMOperationsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
