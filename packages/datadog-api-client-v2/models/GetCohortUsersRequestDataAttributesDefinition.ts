/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetCohortUsersRequestDataAttributesDefinitionAudienceFilters } from "./GetCohortUsersRequestDataAttributesDefinitionAudienceFilters";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class GetCohortUsersRequestDataAttributesDefinition {
  "audienceFilters"?: GetCohortUsersRequestDataAttributesDefinitionAudienceFilters;
  "cohort"?: string;
  "inclusionSearch"?: string;
  "returnSearch"?: string;
  "segmentId"?: string;
  "window"?: number;

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
    audienceFilters: {
      baseName: "audience_filters",
      type: "GetCohortUsersRequestDataAttributesDefinitionAudienceFilters",
    },
    cohort: {
      baseName: "cohort",
      type: "string",
    },
    inclusionSearch: {
      baseName: "inclusion_search",
      type: "string",
    },
    returnSearch: {
      baseName: "return_search",
      type: "string",
    },
    segmentId: {
      baseName: "segment_id",
      type: "string",
    },
    window: {
      baseName: "window",
      type: "number",
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
    return GetCohortUsersRequestDataAttributesDefinition.attributeTypeMap;
  }

  public constructor() {}
}
