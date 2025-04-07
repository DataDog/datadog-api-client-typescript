import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOHistoryResponseData } from "./SLOHistoryResponseData";
import { SLOHistoryResponseError } from "./SLOHistoryResponseError";

/**
 * A service level objective history response.
 */
export class SLOHistoryResponse {
  /**
   * An array of service level objective objects.
   */
  "data"?: SLOHistoryResponseData;
  /**
   * A list of errors while querying the history data for the service level objective.
   */
  "errors"?: Array<SLOHistoryResponseError>;
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
    data: {
      baseName: "data",
      type: "SLOHistoryResponseData",
    },
    errors: {
      baseName: "errors",
      type: "Array<SLOHistoryResponseError>",
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
    return SLOHistoryResponse.attributeTypeMap;
  }

  public constructor() {}
}
