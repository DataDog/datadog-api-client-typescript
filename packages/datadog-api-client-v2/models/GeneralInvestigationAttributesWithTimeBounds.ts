/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for a general investigation with an explicit time window.
 */
export class GeneralInvestigationAttributesWithTimeBounds {
  /**
   * A free-form description of what to investigate, up to 4,096 characters.
   */
  "description": string;
  /**
   * The end of the investigation window, in Unix milliseconds.
   */
  "endTime": number;
  /**
   * The start of the investigation window, in Unix milliseconds.
   */
  "startTime": number;
  /**
   * Tags that scope the investigation.
   */
  "tags"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    endTime: {
      baseName: "end_time",
      type: "number",
      required: true,
      format: "int64",
    },
    startTime: {
      baseName: "start_time",
      type: "number",
      required: true,
      format: "int64",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeneralInvestigationAttributesWithTimeBounds.attributeTypeMap;
  }

  public constructor() {}
}
