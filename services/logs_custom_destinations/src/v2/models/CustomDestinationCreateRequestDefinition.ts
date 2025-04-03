import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationCreateRequestAttributes } from "./CustomDestinationCreateRequestAttributes";
import { CustomDestinationType } from "./CustomDestinationType";

/**
 * The definition of a custom destination.
 */
export class CustomDestinationCreateRequestDefinition {
  /**
   * The attributes associated with the custom destination.
   */
  "attributes": CustomDestinationCreateRequestAttributes;
  /**
   * The type of the resource. The value should always be `custom_destination`.
   */
  "type": CustomDestinationType;
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
      type: "CustomDestinationCreateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomDestinationType",
      required: true,
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
    return CustomDestinationCreateRequestDefinition.attributeTypeMap;
  }

  public constructor() {}
}
