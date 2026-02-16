import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ActionMatch } from "./ActionMatch";

export class PickActionResponse {
  /**
   * The matching actions.
   */
  "matches": Array<ActionMatch>;
  /**
   * The request ID.
   */
  "requestId": string;
  /**
   * The total number of matches.
   */
  "totalMatches": number;
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
    matches: {
      baseName: "matches",
      type: "Array<ActionMatch>",
      required: true,
    },
    requestId: {
      baseName: "request_id",
      type: "string",
      required: true,
    },
    totalMatches: {
      baseName: "total_matches",
      type: "number",
      required: true,
      format: "int64",
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
    return PickActionResponse.attributeTypeMap;
  }

  public constructor() {}
}
