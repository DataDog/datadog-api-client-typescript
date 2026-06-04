/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsUpsertAnnotationItem } from "./LLMObsUpsertAnnotationItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating or updating annotations.
 */
export class LLMObsAnnotationsDataAttributesRequest {
  /**
   * List of annotations to create or update. Must contain at least one item.
   */
  "annotations": Array<LLMObsUpsertAnnotationItem>;

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
    annotations: {
      baseName: "annotations",
      type: "Array<LLMObsUpsertAnnotationItem>",
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
    return LLMObsAnnotationsDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
