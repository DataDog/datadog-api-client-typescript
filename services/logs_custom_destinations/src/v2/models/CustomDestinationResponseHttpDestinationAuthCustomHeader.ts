import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationResponseHttpDestinationAuthCustomHeaderType } from "./CustomDestinationResponseHttpDestinationAuthCustomHeaderType";

/**
 * Custom header access authentication.
 */
export class CustomDestinationResponseHttpDestinationAuthCustomHeader {
  /**
   * The header name of the authentication.
   */
  "headerName": string;
  /**
   * Type of the custom header access authentication.
   */
  "type": CustomDestinationResponseHttpDestinationAuthCustomHeaderType;
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
    headerName: {
      baseName: "header_name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomDestinationResponseHttpDestinationAuthCustomHeaderType",
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
    return CustomDestinationResponseHttpDestinationAuthCustomHeader.attributeTypeMap;
  }

  public constructor() {}
}
