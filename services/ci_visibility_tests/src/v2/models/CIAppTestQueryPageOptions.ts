import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppTestQueryPageLimit } from "./CIAppTestQueryPageLimit";

/**
 * Paging attributes for listing test events.
 */
export class CIAppTestQueryPageOptions {
  /**
   * List following results with a cursor provided in the previous query.
   */
  "cursor"?: string;
  /**
   * Maximum number of events in the response, supplied as an integer or a string containing decimal digits.
   */
  "limit"?: CIAppTestQueryPageLimit;
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
    cursor: {
      baseName: "cursor",
      type: "string",
    },
    limit: {
      baseName: "limit",
      type: "CIAppTestQueryPageLimit",
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
    return CIAppTestQueryPageOptions.attributeTypeMap;
  }

  public constructor() {}
}
