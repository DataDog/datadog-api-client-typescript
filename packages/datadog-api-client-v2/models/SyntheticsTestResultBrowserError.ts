/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A browser error captured during a browser test step.
 */
export class SyntheticsTestResultBrowserError {
  /**
   * Error description.
   */
  "description"?: string;
  /**
   * HTTP method associated with the error (for network errors).
   */
  "method"?: string;
  /**
   * Error name.
   */
  "name"?: string;
  /**
   * HTTP status code associated with the error (for network errors).
   */
  "status"?: number;
  /**
   * Type of the browser error.
   */
  "type"?: string;
  /**
   * URL associated with the error.
   */
  "url"?: { [key: string]: any };

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
    description: {
      baseName: "description",
      type: "string",
    },
    method: {
      baseName: "method",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "{ [key: string]: any; }",
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
    return SyntheticsTestResultBrowserError.attributeTypeMap;
  }

  public constructor() {}
}
