import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TemporaryGrantRequestCreateData } from "./TemporaryGrantRequestCreateData";

/**
 * Create a request for the authenticated human user.
 */
export class TemporaryGrantRequestCreateRequest {
  /**
   * The request resource to create. The server generates its ID.
   */
  "data": TemporaryGrantRequestCreateData;
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
      type: "TemporaryGrantRequestCreateData",
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
    return TemporaryGrantRequestCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
