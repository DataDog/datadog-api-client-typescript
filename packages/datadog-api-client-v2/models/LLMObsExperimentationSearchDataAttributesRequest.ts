/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentationContentPreview } from "./LLMObsExperimentationContentPreview";
import { LLMObsExperimentationCursorPage } from "./LLMObsExperimentationCursorPage";
import { LLMObsExperimentationFilter } from "./LLMObsExperimentationFilter";
import { LLMObsExperimentationInclude } from "./LLMObsExperimentationInclude";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for an experimentation search request.
 */
export class LLMObsExperimentationSearchDataAttributesRequest {
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
   * Cursor-based pagination parameters.
   */
  "page"?: LLMObsExperimentationCursorPage;

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
      type: "LLMObsExperimentationCursorPage",
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
    return LLMObsExperimentationSearchDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
