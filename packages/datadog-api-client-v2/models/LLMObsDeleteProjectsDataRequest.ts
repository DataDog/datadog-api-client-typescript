/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsDeleteProjectsDataAttributesRequest } from "./LLMObsDeleteProjectsDataAttributesRequest";
import { LLMObsProjectType } from "./LLMObsProjectType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for deleting LLM Observability projects.
 */
export class LLMObsDeleteProjectsDataRequest {
  /**
   * Attributes for deleting LLM Observability projects.
   */
  "attributes": LLMObsDeleteProjectsDataAttributesRequest;
  /**
   * Resource type of an LLM Observability project.
   */
  "type": LLMObsProjectType;

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
      type: "LLMObsDeleteProjectsDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsProjectType",
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
    return LLMObsDeleteProjectsDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
