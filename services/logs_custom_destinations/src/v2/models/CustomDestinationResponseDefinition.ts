import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationResponseAttributes } from "./CustomDestinationResponseAttributes";
import { CustomDestinationType } from "./CustomDestinationType";

/**
 * The definition of a custom destination.
 */
export class CustomDestinationResponseDefinition {
  /**
   * The attributes associated with the custom destination.
   */
  "attributes"?: CustomDestinationResponseAttributes;
  /**
   * The custom destination ID.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `custom_destination`.
   */
  "type"?: CustomDestinationType;
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
    attributes: {
      baseName: "attributes",
      type: "CustomDestinationResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CustomDestinationType",
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
    return CustomDestinationResponseDefinition.attributeTypeMap;
  }

  public constructor() {}
}
