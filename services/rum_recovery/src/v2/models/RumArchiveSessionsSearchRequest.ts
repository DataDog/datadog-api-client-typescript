import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumArchiveSessionsSearchData } from "./RumArchiveSessionsSearchData";

/**
 * JSON:API document.
 */
export class RumArchiveSessionsSearchRequest {
  /**
   * JSON:API resource.
   */
  "data": RumArchiveSessionsSearchData;
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
      type: "RumArchiveSessionsSearchData",
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
    return RumArchiveSessionsSearchRequest.attributeTypeMap;
  }

  public constructor() {}
}
