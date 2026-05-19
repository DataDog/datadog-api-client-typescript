import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseLink } from "./CaseLink";

/**
 * Response containing a single case link.
 */
export class CaseLinkResponse {
  /**
   * A directional link representing a relationship between two entities. At least one entity must be a case.
   */
  "data": CaseLink;
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
      type: "CaseLink",
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
    return CaseLinkResponse.attributeTypeMap;
  }

  public constructor() {}
}
