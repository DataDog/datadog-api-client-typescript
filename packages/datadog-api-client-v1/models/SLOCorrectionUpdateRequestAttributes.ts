/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOCorrectionCategory } from "./SLOCorrectionCategory";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attribute object associated with the SLO correction to be updated.
 */
export class SLOCorrectionUpdateRequestAttributes {
  /**
   * Category the SLO correction belongs to.
   */
  "category"?: SLOCorrectionCategory;
  /**
   * Description of the correction being made.
   */
  "description"?: string;
  /**
   * Length of time (in seconds) for a specified `rrule` recurring SLO correction.
   */
  "duration"?: number;
  /**
   * Ending time of the correction in epoch seconds.
   */
  "end"?: number;
  /**
   * The recurrence rules as defined in the iCalendar RFC 5545. The supported rules for SLO corrections
   * are `FREQ`, `INTERVAL`, `COUNT`, `UNTIL` and `BYDAY`.
   */
  "rrule"?: string;
  /**
   * Starting time of the correction in epoch seconds.
   */
  "start"?: number;
  /**
   * The timezone to display in the UI for the correction times (defaults to "UTC").
   */
  "timezone"?: string;

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
    category: {
      baseName: "category",
      type: "SLOCorrectionCategory",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    duration: {
      baseName: "duration",
      type: "number",
      format: "int64",
    },
    end: {
      baseName: "end",
      type: "number",
      format: "int64",
    },
    rrule: {
      baseName: "rrule",
      type: "string",
    },
    start: {
      baseName: "start",
      type: "number",
      format: "int64",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOCorrectionUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
