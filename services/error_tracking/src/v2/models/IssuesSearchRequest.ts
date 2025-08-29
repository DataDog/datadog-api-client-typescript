import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssuesSearchRequestData } from "./IssuesSearchRequestData";

/**
 * Search issues request payload.
 */
export class IssuesSearchRequest {
  /**
   * Search issues request.
   */
  "data": IssuesSearchRequestData;
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
      type: "IssuesSearchRequestData",
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
    return IssuesSearchRequest.attributeTypeMap;
  }

  public constructor() {}
}
