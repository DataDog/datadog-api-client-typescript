import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimelineCellAuthorUserContent } from "./TimelineCellAuthorUserContent";
import { TimelineCellAuthorUserType } from "./TimelineCellAuthorUserType";

/**
 * timeline cell user author
 */
export class TimelineCellAuthorUser {
  /**
   * user author content.
   */
  "content"?: TimelineCellAuthorUserContent;
  /**
   * user author type.
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
