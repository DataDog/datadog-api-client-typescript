/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A chapter within a RUM replay summary, representing a distinct segment of user activity.
 */
export class ReplaySummaryChapter {
  /**
   * End time of the chapter in milliseconds.
   */
  "endMs": number;
  /**
   * Start time of the chapter in milliseconds.
   */
  "startMs": number;
  /**
   * Description of user activity during this chapter.
   */
  "text": string;

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
    endMs: {
      baseName: "end_ms",
      type: "number",
      required: true,
      format: "int64",
    },
    startMs: {
      baseName: "start_ms",
      type: "number",
      required: true,
      format: "int64",
    },
    text: {
      baseName: "text",
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
    return ReplaySummaryChapter.attributeTypeMap;
  }

  public constructor() {}
}
