import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityContextEntity } from "./EntityContextEntity";

/**
 * Response from the single entity context endpoint, containing the matching entity.
 */
export class SingleEntityContextResponse {
  /**
   * A single entity returned by the entity context endpoint.
   */
  "data": EntityContextEntity;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "EntityContextEntity",
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
    return SingleEntityContextResponse.attributeTypeMap;
  }

  public constructor() {}
}
