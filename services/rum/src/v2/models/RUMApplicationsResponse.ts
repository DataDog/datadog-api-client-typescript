import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMApplicationList } from "./RUMApplicationList";

/**
 * RUM applications response.
 */
export class RUMApplicationsResponse {
  /**
   * RUM applications array response.
   */
  "data"?: Array<RUMApplicationList>;
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
      type: "Array<RUMApplicationList>",
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
    return RUMApplicationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
