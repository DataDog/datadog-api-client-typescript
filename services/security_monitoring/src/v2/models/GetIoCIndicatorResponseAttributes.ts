import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IoCIndicatorDetailed } from "./IoCIndicatorDetailed";

/**
 * Attributes of the get indicator response.
 */
export class GetIoCIndicatorResponseAttributes {
  /**
   * An indicator of compromise with extended context from your environment.
   */
  "data"?: IoCIndicatorDetailed;
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
      type: "IoCIndicatorDetailed",
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
    return GetIoCIndicatorResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
