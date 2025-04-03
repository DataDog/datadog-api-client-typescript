import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceDefinitionData } from "./ServiceDefinitionData";

/**
 * Get service definition response.
 */
export class ServiceDefinitionGetResponse {
  /**
   * Service definition data.
   */
  "data"?: ServiceDefinitionData;
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
      type: "ServiceDefinitionData",
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
    return ServiceDefinitionGetResponse.attributeTypeMap;
  }

  public constructor() {}
}
