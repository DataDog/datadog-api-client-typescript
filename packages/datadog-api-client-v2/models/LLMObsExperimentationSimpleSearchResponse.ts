/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentationSimpleSearchDataResponse } from "./LLMObsExperimentationSimpleSearchDataResponse";
import { LLMObsExperimentationSimpleSearchMeta } from "./LLMObsExperimentationSimpleSearchMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response to an offset-based experimentation simple search.
 */
export class LLMObsExperimentationSimpleSearchResponse {
  /**
   * JSON:API data object for a simple search response.
   */
  "data": LLMObsExperimentationSimpleSearchDataResponse;
  /**
   * Pagination metadata for a simple search response.
   */
  "meta"?: LLMObsExperimentationSimpleSearchMeta;

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
    data: {
      baseName: "data",
      type: "LLMObsExperimentationSimpleSearchDataResponse",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "LLMObsExperimentationSimpleSearchMeta",
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
    return LLMObsExperimentationSimpleSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
