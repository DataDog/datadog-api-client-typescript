import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SessionIdData } from "./SessionIdData";

/**
 * A collection of session identifiers used for bulk add or remove operations on a playlist.
 */
export class SessionIdArray {
  /**
   * Array of session identifier data objects.
   */
  "data": Array<SessionIdData>;
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
      type: "Array<SessionIdData>",
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
    return SessionIdArray.attributeTypeMap;
  }

  public constructor() {}
}
