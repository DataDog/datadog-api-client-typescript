import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipHistoryItem } from "./OwnershipHistoryItem";
import { OwnershipHistoryPagination } from "./OwnershipHistoryPagination";

/**
 * The attributes of an ownership history response.
 */
export class OwnershipHistoryAttributes {
  /**
   * The list of history entries returned for this page.
   */
  "items": Array<OwnershipHistoryItem>;
  /**
   * Cursor-based pagination metadata for the history response.
   */
  "pagination": OwnershipHistoryPagination;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    items: {
      baseName: "items",
      type: "Array<OwnershipHistoryItem>",
      required: true,
    },
    pagination: {
      baseName: "pagination",
      type: "OwnershipHistoryPagination",
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
    return OwnershipHistoryAttributes.attributeTypeMap;
  }

  public constructor() {}
}
