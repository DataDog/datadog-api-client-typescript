/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsAnnotationSchema } from "./LLMObsAnnotationSchema";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for updating an Agent Observability annotation queue. All fields are optional.
 */
export class LLMObsAnnotationQueueUpdateDataAttributesRequest {
  /**
   * Schema defining the labels for an annotation queue.
   */
  "annotationSchema"?: LLMObsAnnotationSchema;
  /**
   * Updated description of the annotation queue.
   */
  "description"?: string;
  /**
   * Updated name of the annotation queue.
   */
  "name"?: string;
  /**
   * Whether annotation access is restricted to assigned users.
   */
  "restrictToAssignees"?: boolean;
  /**
   * Whether annotation access is restricted to queue reviewers.
   */
  "restrictToReviewers"?: boolean;
  /**
   * Updated email addresses of reviewers who can access the annotation queue.
   */
  "reviewerEmails"?: Array<string>;

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
    },
    restrictToAssignees: {
      baseName: "restrict_to_assignees",
      type: "boolean",
    },
    restrictToReviewers: {
      baseName: "restrict_to_reviewers",
      type: "boolean",
    },
    reviewerEmails: {
      baseName: "reviewer_emails",
      type: "Array<string>",
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
    return LLMObsAnnotationQueueUpdateDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
