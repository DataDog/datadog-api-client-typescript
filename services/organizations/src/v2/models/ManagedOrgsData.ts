import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ManagedOrgsRelationships } from "./ManagedOrgsRelationships";
import { ManagedOrgsType } from "./ManagedOrgsType";

/**
 * The managed organizations resource.
 */
export class ManagedOrgsData {
  /**
   * The UUID of the current organization.
   */
  "id": string;
  /**
   * Relationships of the managed organizations resource.
   */
  "relationships": ManagedOrgsRelationships;
  /**
   * The resource type for managed organizations.
   */
  "type": ManagedOrgsType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "ManagedOrgsRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ManagedOrgsType",
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
    return ManagedOrgsData.attributeTypeMap;
  }

  public constructor() {}
}
