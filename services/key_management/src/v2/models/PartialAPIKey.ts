import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { APIKeyRelationships } from "./APIKeyRelationships";
import { APIKeysType } from "./APIKeysType";
import { PartialAPIKeyAttributes } from "./PartialAPIKeyAttributes";

/**
 * Partial Datadog API key.
 */
export class PartialAPIKey {
  /**
   * Attributes of a partial API key.
   */
  "attributes"?: PartialAPIKeyAttributes;
  /**
   * ID of the API key.
   */
  "id"?: string;
  /**
   * Resources related to the API key.
   */
  "relationships"?: APIKeyRelationships;
  /**
   * API Keys resource type.
   */
  "type"?: APIKeysType;
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
      type: "PartialAPIKeyAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "APIKeyRelationships",
    },
    type: {
      baseName: "type",
      type: "APIKeysType",
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
    return PartialAPIKey.attributeTypeMap;
  }

  public constructor() {}
}
