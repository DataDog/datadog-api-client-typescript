/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetCohortRequestDataAttributesDefinitionAudienceFiltersAccountsItems } from "./GetCohortRequestDataAttributesDefinitionAudienceFiltersAccountsItems";
import { GetCohortRequestDataAttributesDefinitionAudienceFiltersSegmentsItems } from "./GetCohortRequestDataAttributesDefinitionAudienceFiltersSegmentsItems";
import { GetCohortRequestDataAttributesDefinitionAudienceFiltersUsersItems } from "./GetCohortRequestDataAttributesDefinitionAudienceFiltersUsersItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class GetCohortRequestDataAttributesDefinitionAudienceFilters {
  "accounts"?: Array<GetCohortRequestDataAttributesDefinitionAudienceFiltersAccountsItems>;
  "formula"?: string;
  "segments"?: Array<GetCohortRequestDataAttributesDefinitionAudienceFiltersSegmentsItems>;
  "users"?: Array<GetCohortRequestDataAttributesDefinitionAudienceFiltersUsersItems>;

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
      type: "Array<GetCohortRequestDataAttributesDefinitionAudienceFiltersAccountsItems>",
    },
    formula: {
      baseName: "formula",
      type: "string",
    },
    segments: {
      baseName: "segments",
      type: "Array<GetCohortRequestDataAttributesDefinitionAudienceFiltersSegmentsItems>",
    },
    users: {
      baseName: "users",
      type: "Array<GetCohortRequestDataAttributesDefinitionAudienceFiltersUsersItems>",
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
    return GetCohortRequestDataAttributesDefinitionAudienceFilters.attributeTypeMap;
  }

  public constructor() {}
}
