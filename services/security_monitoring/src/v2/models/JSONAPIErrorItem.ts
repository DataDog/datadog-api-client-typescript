import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";

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
  "meta"?: any;
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
      type: "any",
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
