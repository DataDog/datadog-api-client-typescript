/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReplaySummaryChapter } from "./ReplaySummaryChapter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a RUM replay summary response.
 */
export class ReplaySummaryDataAttributesResponse {
  /**
   * List of chapters breaking down the session into distinct activity segments.
   */
  "chapters": Array<ReplaySummaryChapter>;
  /**
   * Whether the session contained sufficient user activity to generate a summary.
   */
  "hasEnoughActivity": boolean;
  /**
   * Whether the session exceeded the event count limit for summary generation.
   */
  "hasTooManyEvents": boolean;
  /**
   * AI-generated summary of the replay session.
   */
  "summary": string;
  /**
   * Version of the prompt used to generate the summary.
   */
  "version": string;

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
    chapters: {
      baseName: "chapters",
      type: "Array<ReplaySummaryChapter>",
      required: true,
    },
    hasEnoughActivity: {
      baseName: "has_enough_activity",
      type: "boolean",
      required: true,
    },
    hasTooManyEvents: {
      baseName: "has_too_many_events",
      type: "boolean",
      required: true,
    },
    summary: {
      baseName: "summary",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
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
    return ReplaySummaryDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
