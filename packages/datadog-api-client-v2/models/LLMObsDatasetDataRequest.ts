/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsDatasetDataAttributesRequest } from "./LLMObsDatasetDataAttributesRequest";
import { LLMObsDatasetType } from "./LLMObsDatasetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for creating an LLM Observability dataset.
 */
export class LLMObsDatasetDataRequest {
  /**
   * Attributes for creating an LLM Observability dataset.
   */
  "attributes": LLMObsDatasetDataAttributesRequest;
  /**
   * Resource type of an LLM Observability dataset.
   */
  "type": LLMObsDatasetType;

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
      type: "LLMObsDatasetDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsDatasetType",
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
    return LLMObsDatasetDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
