import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TemporaryGrantRequestData } from "./TemporaryGrantRequestData";

/**
 * A single temporary grant request.
 */
export class TemporaryGrantRequestResponse {
  /**
   * A temporary grant request resource.
   */
  "data": TemporaryGrantRequestData;
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
      type: "TemporaryGrantRequestData",
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
    return TemporaryGrantRequestResponse.attributeTypeMap;
  }

  public constructor() {}
}
