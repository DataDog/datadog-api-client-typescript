/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * API error response body
 */
export class JSONAPIErrorItem {
  /**
   * A human-readable explanation specific to this occurrence of the error.
   */
  "detail"?: string;
  /**
   * Non-standard meta-information about the error
   */
  "meta"?: { [key: string]: any };
  /**
   * References to the source of the error.
   */
  "source"?: JSONAPIErrorItemSource;
  /**
   * Status code of the response.
   */
  "status"?: string;
  /**
   * Short human-readable summary of the error.
   */
  "title"?: string;

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
    detail: {
      baseName: "detail",
      type: "string",
    },
    meta: {
      baseName: "meta",
      type: "{ [key: string]: any; }",
    },
    source: {
      baseName: "source",
      type: "JSONAPIErrorItemSource",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    title: {
      baseName: "title",
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
    return JSONAPIErrorItem.attributeTypeMap;
  }

  public constructor() {}
}
