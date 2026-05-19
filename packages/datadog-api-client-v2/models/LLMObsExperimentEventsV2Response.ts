/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsCursorMeta } from "./LLMObsCursorMeta";
import { LLMObsExperimentEventsV2DataResponse } from "./LLMObsExperimentEventsV2DataResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for listing experiment events (v2/v3). Returns spans and summary metrics in a single resource.
 */
export class LLMObsExperimentEventsV2Response {
  /**
   * JSON:API data object for an experiment events response.
   */
  "data": LLMObsExperimentEventsV2DataResponse;
  /**
   * Pagination cursor metadata.
   */
  "meta"?: LLMObsCursorMeta;

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
      type: "LLMObsExperimentEventsV2DataResponse",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "LLMObsCursorMeta",
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
    return LLMObsExperimentEventsV2Response.attributeTypeMap;
  }

  public constructor() {}
}
