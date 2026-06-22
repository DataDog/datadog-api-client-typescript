import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationInvestigation } from "./RemediationInvestigation";

/**
 * Response payload for listing investigations.
 */
export class RemediationListInvestigationsResponse {
  /**
   * The matching investigations.
   */
  "investigations"?: Array<RemediationInvestigation>;
  /**
   * Token to pass as page_token on the next call. Empty when there are no further pages.
   */
  "nextPageToken"?: string;
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
    investigations: {
      baseName: "investigations",
      type: "Array<RemediationInvestigation>",
    },
    nextPageToken: {
      baseName: "next_page_token",
      type: "string",
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
    return RemediationListInvestigationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
