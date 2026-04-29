/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsAnnotationSchema } from "./LLMObsAnnotationSchema";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating an LLM Observability annotation queue.
 */
export class LLMObsAnnotationQueueDataAttributesRequest {
  /**
   * Schema defining the labels for an annotation queue.
   */
  "annotationSchema"?: LLMObsAnnotationSchema;
  /**
   * Description of the annotation queue.
   */
  "description"?: string;
  /**
   * Name of the annotation queue.
   */
  "name": string;
  /**
   * Identifier of the project this queue belongs to.
   */
  "projectId": string;

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
    annotationSchema: {
      baseName: "annotation_schema",
      type: "LLMObsAnnotationSchema",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    projectId: {
      baseName: "project_id",
      type: "string",
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
    return LLMObsAnnotationQueueDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
