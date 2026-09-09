import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnalysisRequestData } from "./AnalysisRequestData";

/**
 * The request payload for running static analysis on source code.
 */
export class AnalysisRequest {
  /**
   * CSRF token for security, sent by browser-based clients. Ignored by the API when absent.
   */
  "authenticationToken"?: string;
  /**
   * The primary data object in the analysis request.
   */
  "data": AnalysisRequestData;
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
    authenticationToken: {
      baseName: "_authentication_token",
      type: "string",
    },
    data: {
      baseName: "data",
      type: "AnalysisRequestData",
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
    return AnalysisRequest.attributeTypeMap;
  }

  public constructor() {}
}
