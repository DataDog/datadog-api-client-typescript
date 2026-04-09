/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an LLM Observability annotation queue.
 */
export class LLMObsAnnotationQueueDataAttributesResponse {
  /**
   * Timestamp when the queue was created.
   */
  "createdAt": Date;
  /**
   * Identifier of the user who created the queue.
   */
  "createdBy": string;
  /**
   * Description of the annotation queue.
   */
  "description": string;
  /**
   * Timestamp when the queue was last modified.
   */
  "modifiedAt": Date;
  /**
   * Identifier of the user who last modified the queue.
   */
  "modifiedBy": string;
  /**
   * Name of the annotation queue.
   */
  "name": string;
  /**
   * Identifier of the user who owns the queue.
   */
  "ownedBy": string;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    ownedBy: {
      baseName: "owned_by",
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
    return LLMObsAnnotationQueueDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
