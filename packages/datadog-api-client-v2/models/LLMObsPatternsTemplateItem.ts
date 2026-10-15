/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single Agent Observability patterns template in a list response.
 */
export class LLMObsPatternsTemplateItem {
  /**
   * Instructions guiding how topics are clustered for configurations linked to this template.
   */
  "clusteringInstructions": string;
  /**
   * Timestamp when the template was created.
   */
  "createdAt": Date;
  /**
   * Human-readable description of what the template is for.
   */
  "description": string;
  /**
   * Prefix merged into the query that selects spans for configurations linked to this template.
   */
  "evpQueryPrefix": string;
  /**
   * Unique identifier of the template.
   */
  "id": string;
  /**
   * Name of the template.
   */
  "name": string;
  /**
   * Scope the template applies to.
   */
  "scope": string;
  /**
   * Template used to guide topic generation for configurations linked to this template.
   */
  "template": string;
  /**
   * Default lookback window, in milliseconds, for configurations linked to this template.
   */
  "timeFrameDurationMs": number;

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
    clusteringInstructions: {
      baseName: "clustering_instructions",
      type: "string",
      required: true,
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
    evpQueryPrefix: {
      baseName: "evp_query_prefix",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    scope: {
      baseName: "scope",
      type: "string",
      required: true,
    },
    template: {
      baseName: "template",
      type: "string",
      required: true,
    },
    timeFrameDurationMs: {
      baseName: "time_frame_duration_ms",
      type: "number",
      required: true,
      format: "int64",
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
    return LLMObsPatternsTemplateItem.attributeTypeMap;
  }

  public constructor() {}
}
