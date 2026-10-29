import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageData } from "./OnCallPageData";
import { OnCallPagesIncluded } from "./OnCallPagesIncluded";

/**
 * A single On-Call Page with its related included resources.
 */
export class OnCallPageResponse {
  /**
   * An On-Call Page.
   */
  "data": OnCallPageData;
  /**
   * Resources related to the Page, such as users, teams, scheduled actions, and links.
   */
  "included"?: Array<OnCallPagesIncluded>;
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
      type: "OnCallPageData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<OnCallPagesIncluded>",
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
    return OnCallPageResponse.attributeTypeMap;
  }

  public constructor() {}
}
