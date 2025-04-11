import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationCreateRequestDefinition } from "./CustomDestinationCreateRequestDefinition";

/**
 * The custom destination.
 */
export class CustomDestinationCreateRequest {
  /**
   * The definition of a custom destination.
   */
  "data"?: CustomDestinationCreateRequestDefinition;
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
      type: "CustomDestinationCreateRequestDefinition",
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
    return CustomDestinationCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
