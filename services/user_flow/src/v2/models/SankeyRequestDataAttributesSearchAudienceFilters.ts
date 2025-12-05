import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SankeyRequestDataAttributesSearchAudienceFiltersAccountsItems } from "./SankeyRequestDataAttributesSearchAudienceFiltersAccountsItems";
import { SankeyRequestDataAttributesSearchAudienceFiltersSegmentsItems } from "./SankeyRequestDataAttributesSearchAudienceFiltersSegmentsItems";
import { SankeyRequestDataAttributesSearchAudienceFiltersUsersItems } from "./SankeyRequestDataAttributesSearchAudienceFiltersUsersItems";

export class SankeyRequestDataAttributesSearchAudienceFilters {
  "accounts"?: Array<SankeyRequestDataAttributesSearchAudienceFiltersAccountsItems>;
  "formula"?: string;
  "segments"?: Array<SankeyRequestDataAttributesSearchAudienceFiltersSegmentsItems>;
  "users"?: Array<SankeyRequestDataAttributesSearchAudienceFiltersUsersItems>;
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
    accounts: {
      baseName: "accounts",
      type: "Array<SankeyRequestDataAttributesSearchAudienceFiltersAccountsItems>",
    },
    formula: {
      baseName: "formula",
      type: "string",
    },
    segments: {
      baseName: "segments",
      type: "Array<SankeyRequestDataAttributesSearchAudienceFiltersSegmentsItems>",
    },
    users: {
      baseName: "users",
      type: "Array<SankeyRequestDataAttributesSearchAudienceFiltersUsersItems>",
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
    return SankeyRequestDataAttributesSearchAudienceFilters.attributeTypeMap;
  }

  public constructor() {}
}
