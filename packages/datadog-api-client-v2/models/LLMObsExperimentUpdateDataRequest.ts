/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentType } from "./LLMObsExperimentType";
import { LLMObsExperimentUpdateDataAttributesRequest } from "./LLMObsExperimentUpdateDataAttributesRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating an LLM Observability experiment.
 */
export class LLMObsExperimentUpdateDataRequest {
  /**
   * Attributes for updating an LLM Observability experiment.
   */
  "attributes": LLMObsExperimentUpdateDataAttributesRequest;
  /**
   * Resource type of an LLM Observability experiment.
   */
  "type": LLMObsExperimentType;

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
      type: "LLMObsExperimentUpdateDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsExperimentType",
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
    return LLMObsExperimentUpdateDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
