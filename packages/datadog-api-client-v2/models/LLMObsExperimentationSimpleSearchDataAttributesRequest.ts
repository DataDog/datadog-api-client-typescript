/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentationContentPreview } from "./LLMObsExperimentationContentPreview";
import { LLMObsExperimentationFilter } from "./LLMObsExperimentationFilter";
import { LLMObsExperimentationInclude } from "./LLMObsExperimentationInclude";
import { LLMObsExperimentationNumberPage } from "./LLMObsExperimentationNumberPage";
import { LLMObsExperimentationSortField } from "./LLMObsExperimentationSortField";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for an experimentation simple search request.
 */
export class LLMObsExperimentationSimpleSearchDataAttributesRequest {
  /**
   * Options to control content preview truncation.
   */
  "contentPreview"?: LLMObsExperimentationContentPreview;
  /**
   * Filter criteria for an experimentation search request.
   */
  "filter": LLMObsExperimentationFilter;
  /**
   * Additional data to include in the response.
   */
  "include"?: LLMObsExperimentationInclude;
  /**
   * Offset-based pagination parameters for simple search.
   */
  "page"?: LLMObsExperimentationNumberPage;
  /**
   * Sort order for results.
   */
  "sort"?: Array<LLMObsExperimentationSortField>;

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
    contentPreview: {
      baseName: "content_preview",
      type: "LLMObsExperimentationContentPreview",
    },
    filter: {
      baseName: "filter",
      type: "LLMObsExperimentationFilter",
      required: true,
    },
    include: {
      baseName: "include",
      type: "LLMObsExperimentationInclude",
    },
    page: {
      baseName: "page",
      type: "LLMObsExperimentationNumberPage",
    },
    sort: {
      baseName: "sort",
      type: "Array<LLMObsExperimentationSortField>",
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
    return LLMObsExperimentationSimpleSearchDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
