import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimelineCellAuthorUserContent } from "./TimelineCellAuthorUserContent";
import { TimelineCellAuthorUserType } from "./TimelineCellAuthorUserType";

/**
 * A user who authored a timeline cell.
 */
export class TimelineCellAuthorUser {
  /**
   * Profile information for the user who authored the timeline cell.
   */
  "content"?: TimelineCellAuthorUserContent;
  /**
   * The type of timeline cell author. Currently only `USER` is supported.
   */
  "type"?: TimelineCellAuthorUserType;
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
    content: {
      baseName: "content",
      type: "TimelineCellAuthorUserContent",
    },
    type: {
      baseName: "type",
      type: "TimelineCellAuthorUserType",
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
    return TimelineCellAuthorUser.attributeTypeMap;
  }

  public constructor() {}
}
