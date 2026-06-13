/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A topic discovered by an LLM Observability patterns run.
 */
export class LLMObsPatternsTopic {
  /**
   * Coherence score of the topic.
   */
  "coherenceScore": number;
  /**
   * Timestamp when the topic was created.
   */
  "createdAt": Date;
  /**
   * Description of the topic.
   */
  "description": string;
  /**
   * Timestamp when the topic was first seen.
   */
  "firstSeenAt": Date;
  /**
   * Level of the topic in the hierarchy. Level 0 is a leaf topic.
   */
  "hierarchyLevel": number;
  /**
   * Unique identifier of the topic.
   */
  "id": string;
  /**
   * Whether the topic has been validated.
   */
  "isValidated": boolean;
  /**
   * Name of the topic.
   */
  "name": string;
  /**
   * Identifier of the parent topic. Empty for top-level topics.
   */
  "parentTopicId": string;
  /**
   * Number of data points assigned to the topic.
   */
  "pointCount": number;
  /**
   * Identifier of the run that produced the topic.
   */
  "runId": string;

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
    coherenceScore: {
      baseName: "coherence_score",
      type: "number",
      required: true,
      format: "double",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    firstSeenAt: {
      baseName: "first_seen_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    hierarchyLevel: {
      baseName: "hierarchy_level",
      type: "number",
      required: true,
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    isValidated: {
      baseName: "is_validated",
      type: "boolean",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    parentTopicId: {
      baseName: "parent_topic_id",
      type: "string",
      required: true,
    },
    pointCount: {
      baseName: "point_count",
      type: "number",
      required: true,
      format: "int64",
    },
    runId: {
      baseName: "run_id",
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
    return LLMObsPatternsTopic.attributeTypeMap;
  }

  public constructor() {}
}
