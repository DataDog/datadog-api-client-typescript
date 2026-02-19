/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumSegmentTemplateParameterDef } from "./RumSegmentTemplateParameterDef";
import { RumSegmentTemplateStatus } from "./RumSegmentTemplateStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a segment template in a response.
 */
export class RumSegmentTemplateResponseAttributes {
  /**
   * The category of the template.
   */
  "category": string;
  /**
   * The creation timestamp in RFC 3339 format.
   */
  "createdAt": Date;
  /**
   * A description of the template.
   */
  "description": string;
  /**
   * The last modification timestamp in RFC 3339 format.
   */
  "modifiedAt": Date;
  /**
   * The name of the template.
   */
  "name": string;
  /**
   * The template parameter definitions.
   */
  "parameters": { [key: string]: RumSegmentTemplateParameterDef };
  /**
   * The status of a segment template.
   */
  "status": RumSegmentTemplateStatus;
  /**
   * The version number of the template.
   */
  "version": number;

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
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    parameters: {
      baseName: "parameters",
      type: "{ [key: string]: RumSegmentTemplateParameterDef; }",
      required: true,
    },
    status: {
      baseName: "status",
      type: "RumSegmentTemplateStatus",
      required: true,
    },
    version: {
      baseName: "version",
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
    return RumSegmentTemplateResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
