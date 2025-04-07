import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LeakedKeyAttributes } from "./LeakedKeyAttributes";
import { LeakedKeyType } from "./LeakedKeyType";

/**
 * The definition of LeakedKey object.
 */
export class LeakedKey {
  /**
   * The definition of LeakedKeyAttributes object.
   */
  "attributes": LeakedKeyAttributes;
  /**
   * The LeakedKey id.
   */
  "id": string;
  /**
   * The definition of LeakedKeyType object.
   */
  "type": LeakedKeyType;
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
      type: "LeakedKeyAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LeakedKeyType",
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
    return LeakedKey.attributeTypeMap;
  }

  public constructor() {}
}
