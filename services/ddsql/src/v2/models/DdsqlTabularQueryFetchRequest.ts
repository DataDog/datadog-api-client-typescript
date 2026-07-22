import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DdsqlTabularQueryFetchRequestData } from "./DdsqlTabularQueryFetchRequestData";

/**
 * Wrapper for a DDSQL tabular query fetch request.
 */
export class DdsqlTabularQueryFetchRequest {
  /**
   * JSON:API resource object for a DDSQL tabular query fetch request.
   */
  "data": DdsqlTabularQueryFetchRequestData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "DdsqlTabularQueryFetchRequestData",
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
    return DdsqlTabularQueryFetchRequest.attributeTypeMap;
  }

  public constructor() {}
}
