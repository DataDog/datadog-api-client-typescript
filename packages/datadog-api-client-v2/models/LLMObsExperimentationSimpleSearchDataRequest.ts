/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentationSimpleSearchDataAttributesRequest } from "./LLMObsExperimentationSimpleSearchDataAttributesRequest";
import { LLMObsExperimentationType } from "./LLMObsExperimentationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for an experimentation simple search request.
 */
export class LLMObsExperimentationSimpleSearchDataRequest {
  /**
   * Attributes for an experimentation simple search request.
   */
  "attributes": LLMObsExperimentationSimpleSearchDataAttributesRequest;
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
      type: "LLMObsExperimentationSimpleSearchDataAttributesRequest",
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
    return LLMObsExperimentationSimpleSearchDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
