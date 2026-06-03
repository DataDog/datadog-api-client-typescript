import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceRepositoryInfoRequestData } from "./ServiceRepositoryInfoRequestData";

/**
 * Request body for retrieving service repository information.
 */
export class ServiceRepositoryInfoRequest {
  /**
   * Data object for the service repository info request.
   */
  "data": ServiceRepositoryInfoRequestData;
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
      type: "ServiceRepositoryInfoRequestData",
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
    return ServiceRepositoryInfoRequest.attributeTypeMap;
  }

  public constructor() {}
}
