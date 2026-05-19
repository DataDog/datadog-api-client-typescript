import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseBulkUpdateRequestData } from "./CaseBulkUpdateRequestData";

/**
 * Request payload for applying a single action (such as changing priority, status, or assignment) to multiple cases at once.
 */
export class CaseBulkUpdateRequest {
  /**
   * Data object wrapping the bulk update type and attributes.
   */
  "data": CaseBulkUpdateRequestData;
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
      type: "CaseBulkUpdateRequestData",
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
    return CaseBulkUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
