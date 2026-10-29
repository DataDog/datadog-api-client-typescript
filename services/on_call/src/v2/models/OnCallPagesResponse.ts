import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageData } from "./OnCallPageData";
import { OnCallPagesIncluded } from "./OnCallPagesIncluded";
import { SchedulesResponseMeta } from "./SchedulesResponseMeta";

/**
 * A list of On-Call Pages with pagination metadata and related included resources.
 */
export class OnCallPagesResponse {
  /**
   * A list of Pages.
   */
  "data": Array<OnCallPageData>;
  /**
   * Resources related to the Pages, such as users, teams, and scheduled actions.
   */
  "included"?: Array<OnCallPagesIncluded>;
  /**
   * Metadata that is included in the response when listing On-Call resources.
   */
  "meta"?: SchedulesResponseMeta;
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
      type: "Array<OnCallPageData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<OnCallPagesIncluded>",
    },
    meta: {
      baseName: "meta",
      type: "SchedulesResponseMeta",
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
    return OnCallPagesResponse.attributeTypeMap;
  }

  public constructor() {}
}
