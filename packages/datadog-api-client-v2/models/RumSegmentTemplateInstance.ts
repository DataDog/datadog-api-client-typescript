/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A template-based query block within a segment data query.
 */
export class RumSegmentTemplateInstance {
  /**
   * The start of the time range in milliseconds since epoch.
   */
  "from"?: number;
  /**
   * The template parameters as key-value pairs.
   */
  "parameters"?: { [key: string]: string };
  /**
   * The identifier of the template.
   */
  "templateId": string;
  /**
   * The end of the time range in milliseconds since epoch.
   */
  "to"?: number;

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
      type: "number",
      format: "int64",
    },
    parameters: {
      baseName: "parameters",
      type: "{ [key: string]: string; }",
    },
    templateId: {
      baseName: "template_id",
      type: "string",
      required: true,
    },
    to: {
      baseName: "to",
      type: "number",
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
    return RumSegmentTemplateInstance.attributeTypeMap;
  }

  public constructor() {}
}
