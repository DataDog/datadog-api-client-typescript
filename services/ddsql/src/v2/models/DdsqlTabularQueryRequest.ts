import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DdsqlTabularQueryRequestData } from "./DdsqlTabularQueryRequestData";

/**
 * Wrapper for a DDSQL tabular query execution request.
 */
export class DdsqlTabularQueryRequest {
  /**
   * JSON:API resource object for a DDSQL tabular query execution request.
   */
  "data": DdsqlTabularQueryRequestData;
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
      type: "DdsqlTabularQueryRequestData",
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
    return DdsqlTabularQueryRequest.attributeTypeMap;
  }

  public constructor() {}
}
