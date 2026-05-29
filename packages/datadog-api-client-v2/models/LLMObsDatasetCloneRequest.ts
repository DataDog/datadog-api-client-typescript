/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsDatasetCloneDataRequest } from "./LLMObsDatasetCloneDataRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to clone an LLM Observability dataset.
 */
export class LLMObsDatasetCloneRequest {
  /**
   * Data object for cloning an LLM Observability dataset.
   */
  "data": LLMObsDatasetCloneDataRequest;

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
      type: "LLMObsDatasetCloneDataRequest",
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
    return LLMObsDatasetCloneRequest.attributeTypeMap;
  }

  public constructor() {}
}
