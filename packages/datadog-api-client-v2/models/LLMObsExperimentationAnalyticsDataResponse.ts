/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentationAnalyticsDataAttributesResponse } from "./LLMObsExperimentationAnalyticsDataAttributesResponse";
import { LLMObsExperimentationType } from "./LLMObsExperimentationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API data object for an analytics response.
 */
export class LLMObsExperimentationAnalyticsDataResponse {
  /**
   * Attributes of an analytics response.
   */
  "attributes": LLMObsExperimentationAnalyticsDataAttributesResponse;
  /**
   * Server-generated identifier for this analytics result.
   */
  "id": string;
  /**
   * Resource type for experimentation search and analytics operations.
   */
  "type": LLMObsExperimentationType;

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
      type: "LLMObsExperimentationAnalyticsDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsExperimentationType",
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
    return LLMObsExperimentationAnalyticsDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
