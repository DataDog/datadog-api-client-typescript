import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationKeyRelationships } from "./ApplicationKeyRelationships";
import { ApplicationKeysType } from "./ApplicationKeysType";
import { FullApplicationKeyAttributes } from "./FullApplicationKeyAttributes";

/**
 * Datadog application key.
 */
export class FullApplicationKey {
  /**
   * Attributes of a full application key.
   */
  "attributes"?: FullApplicationKeyAttributes;
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
      type: "FullApplicationKeyAttributes",
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FullApplicationKey.attributeTypeMap;
  }

  public constructor() {}
}
