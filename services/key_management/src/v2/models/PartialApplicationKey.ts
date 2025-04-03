import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationKeyRelationships } from "./ApplicationKeyRelationships";
import { ApplicationKeysType } from "./ApplicationKeysType";
import { PartialApplicationKeyAttributes } from "./PartialApplicationKeyAttributes";

/**
 * Partial Datadog application key.
 */
export class PartialApplicationKey {
  /**
   * Attributes of a partial application key.
   */
  "attributes"?: PartialApplicationKeyAttributes;
  /**
   * ID of the application key.
   */
  "id"?: string;
  /**
   * Resources related to the application key.
   */
  "relationships"?: ApplicationKeyRelationships;
  /**
   * Application Keys resource type.
   */
  "type"?: ApplicationKeysType;
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
      type: "PartialApplicationKeyAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "ApplicationKeyRelationships",
    },
    type: {
      baseName: "type",
      type: "ApplicationKeysType",
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
    return PartialApplicationKey.attributeTypeMap;
  }

  public constructor() {}
}
