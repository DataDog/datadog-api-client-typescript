import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationStrongLinkResponseData } from "./RUMOperationStrongLinkResponseData";
import { RUMOperationStrongLinksListResponseMeta } from "./RUMOperationStrongLinksListResponseMeta";

/**
 * The response for a list of RUM operation strong links.
 */
export class RUMOperationStrongLinksListResponse {
  "data": Array<RUMOperationStrongLinkResponseData>;
  /**
   * Metadata for a list of RUM operation strong links.
   */
  "meta"?: RUMOperationStrongLinksListResponseMeta;
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
      type: "Array<RUMOperationStrongLinkResponseData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RUMOperationStrongLinksListResponseMeta",
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
    return RUMOperationStrongLinksListResponse.attributeTypeMap;
  }

  public constructor() {}
}
