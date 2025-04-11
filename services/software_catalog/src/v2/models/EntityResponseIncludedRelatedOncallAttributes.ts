import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityResponseIncludedRelatedOncallEscalationItem } from "./EntityResponseIncludedRelatedOncallEscalationItem";

/**
 * Included related oncall attributes.
 */
export class EntityResponseIncludedRelatedOncallAttributes {
  /**
   * Oncall escalations.
   */
  "escalations"?: Array<EntityResponseIncludedRelatedOncallEscalationItem>;
  /**
   * Oncall provider.
   */
  "provider"?: string;
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
    escalations: {
      baseName: "escalations",
      type: "Array<EntityResponseIncludedRelatedOncallEscalationItem>",
    },
    provider: {
      baseName: "provider",
      type: "string",
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
    return EntityResponseIncludedRelatedOncallAttributes.attributeTypeMap;
  }

  public constructor() {}
}
