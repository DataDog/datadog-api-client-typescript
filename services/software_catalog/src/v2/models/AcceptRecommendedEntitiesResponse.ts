import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Response after accepting recommended entities.
 */
export class AcceptRecommendedEntitiesResponse {
  /**
   * Array of accepted entity data.
   */
  "data"?: Array<any>;
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
      type: "Array<any>",
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
    return AcceptRecommendedEntitiesResponse.attributeTypeMap;
  }

  public constructor() {}
}
