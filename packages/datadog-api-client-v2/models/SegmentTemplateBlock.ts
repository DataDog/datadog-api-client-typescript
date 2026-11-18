/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Selects users or accounts with a segment template.
 */
export class SegmentTemplateBlock {
  /**
   * Start of the time range, in epoch milliseconds.
   */
  "from"?: string;
  /**
   * Name of the block, used in `combination`.
   */
  "name"?: string;
  /**
   * Template parameter values, keyed by parameter name.
   */
  "parameters": { [key: string]: any };
  /**
   * ID of the segment template, such as `time-spent-v1`.
   */
  "templateId": string;
  /**
   * End of the time range, in epoch milliseconds.
   */
  "to"?: string;

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
    from: {
      baseName: "from",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    parameters: {
      baseName: "parameters",
      type: "{ [key: string]: any; }",
      required: true,
    },
    templateId: {
      baseName: "template_id",
      type: "string",
      required: true,
    },
    to: {
      baseName: "to",
      type: "string",
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
    return SegmentTemplateBlock.attributeTypeMap;
  }

  public constructor() {}
}
