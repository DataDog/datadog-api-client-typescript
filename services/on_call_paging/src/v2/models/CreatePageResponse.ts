import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreatePageResponseData } from "./CreatePageResponseData";

/**
 * The full response object after creating a new On-Call Page.
 */
export class CreatePageResponse {
  /**
   * The information returned after successfully creating a page.
   */
  "data"?: CreatePageResponseData;
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
      type: "CreatePageResponseData",
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
    return CreatePageResponse.attributeTypeMap;
  }

  public constructor() {}
}
