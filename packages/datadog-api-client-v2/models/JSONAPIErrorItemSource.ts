/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * References to the source of the error.
 */
export class JSONAPIErrorItemSource {
  /**
   * A string indicating the name of a single request header which caused the error.
   */
  "header"?: string;
  /**
   * A string indicating which URI query parameter caused the error.
   */
  "parameter"?: string;
  /**
   * A JSON pointer to the value in the request document that caused the error.
   */
  "pointer"?: string;

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
    header: {
      baseName: "header",
      type: "string",
    },
    parameter: {
      baseName: "parameter",
      type: "string",
    },
    pointer: {
      baseName: "pointer",
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
    return JSONAPIErrorItemSource.attributeTypeMap;
  }

  public constructor() {}
}
