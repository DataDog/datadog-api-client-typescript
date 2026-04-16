import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IoCExplorerListResponseData } from "./IoCExplorerListResponseData";

/**
 * Response for the list indicators of compromise endpoint.
 */
export class IoCExplorerListResponse {
  /**
   * IoC Explorer list response data object.
   */
  "data"?: IoCExplorerListResponseData;
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
      type: "IoCExplorerListResponseData",
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
    return IoCExplorerListResponse.attributeTypeMap;
  }

  public constructor() {}
}
