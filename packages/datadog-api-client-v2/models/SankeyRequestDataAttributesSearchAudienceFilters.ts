/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SankeyRequestDataAttributesSearchAudienceFiltersAccountsItems } from "./SankeyRequestDataAttributesSearchAudienceFiltersAccountsItems";
import { SankeyRequestDataAttributesSearchAudienceFiltersSegmentsItems } from "./SankeyRequestDataAttributesSearchAudienceFiltersSegmentsItems";
import { SankeyRequestDataAttributesSearchAudienceFiltersUsersItems } from "./SankeyRequestDataAttributesSearchAudienceFiltersUsersItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
