import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsListResponseData } from "./CommitmentsListResponseData";

/**
 * Response containing a list of cloud commitment details.
 */
export class CommitmentsListResponse {
  /**
   * The commitments list resource.
   */
  "data": CommitmentsListResponseData;
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
      type: "CommitmentsListResponseData",
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
    return CommitmentsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
