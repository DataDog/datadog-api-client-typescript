import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseLink } from "./CaseLink";

/**
 * Response containing a list of case links.
 */
export class CaseLinksResponse {
  /**
   * A list of case links.
   */
  "data": Array<CaseLink>;
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
      type: "Array<CaseLink>",
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
    return CaseLinksResponse.attributeTypeMap;
  }

  public constructor() {}
}
