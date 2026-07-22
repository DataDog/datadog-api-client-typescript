import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AccountFilters } from "./AccountFilters";

/**
 * Response containing the account filters for a cloud account.
 */
export class AccountFiltersResponse {
  /**
   * The account filters for a cloud account.
   */
  "data"?: AccountFilters;
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
    data: {
      baseName: "data",
      type: "AccountFilters",
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
    return AccountFiltersResponse.attributeTypeMap;
  }

  public constructor() {}
}
