/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentationSearchDataAttributesRequest } from "./LLMObsExperimentationSearchDataAttributesRequest";
import { LLMObsExperimentationType } from "./LLMObsExperimentationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for an experimentation search request.
 */
export class LLMObsExperimentationSearchDataRequest {
  /**
   * Attributes for an experimentation search request.
   */
  "attributes": LLMObsExperimentationSearchDataAttributesRequest;
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
      type: "LLMObsExperimentationSearchDataAttributesRequest",
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
    return LLMObsExperimentationSearchDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
