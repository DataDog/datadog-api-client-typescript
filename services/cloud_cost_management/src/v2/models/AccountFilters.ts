import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AccountFiltersAttributes } from "./AccountFiltersAttributes";
import { AccountFiltersType } from "./AccountFiltersType";

/**
 * The account filters for a cloud account.
 */
export class AccountFilters {
  /**
   * Attributes for the account filters of a cloud account.
   */
  "attributes": AccountFiltersAttributes;
  /**
   * The ID of the cloud account.
   */
  "id"?: string;
  /**
   * Type of account filters.
   */
  "type": AccountFiltersType;
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
    attributes: {
      baseName: "attributes",
      type: "AccountFiltersAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AccountFiltersType",
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
    return AccountFilters.attributeTypeMap;
  }

  public constructor() {}
}
