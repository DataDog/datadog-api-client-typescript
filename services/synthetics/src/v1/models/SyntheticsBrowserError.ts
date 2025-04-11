import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsBrowserErrorType } from "./SyntheticsBrowserErrorType";

/**
 * Error response object for a browser test.
 */
export class SyntheticsBrowserError {
  /**
   * Description of the error.
   */
  "description": string;
  /**
   * Name of the error.
   */
  "name": string;
  /**
   * Status Code of the error.
   */
  "status"?: number;
  /**
   * Error type returned by a browser test.
   */
  "type": SyntheticsBrowserErrorType;
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
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "SyntheticsBrowserErrorType",
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
    return SyntheticsBrowserError.attributeTypeMap;
  }

  public constructor() {}
}
