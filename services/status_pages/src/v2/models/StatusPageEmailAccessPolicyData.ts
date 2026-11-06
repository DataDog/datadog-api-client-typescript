import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageEmailAccessPolicyDataAttributes } from "./StatusPageEmailAccessPolicyDataAttributes";
import { StatusPageEmailAccessPolicyDataRelationships } from "./StatusPageEmailAccessPolicyDataRelationships";
import { StatusPageEmailAccessPolicyType } from "./StatusPageEmailAccessPolicyType";

/**
 * The data object for a status page email access policy.
 */
export class StatusPageEmailAccessPolicyData {
  /**
   * Attributes of a status page email access policy.
   */
  "attributes": StatusPageEmailAccessPolicyDataAttributes;
  /**
   * The ID of the email access policy.
   */
  "id": string;
  /**
   * Relationships of a status page email access policy.
   */
  "relationships": StatusPageEmailAccessPolicyDataRelationships;
  /**
   * Status page email access policy resource type.
   */
  "type": StatusPageEmailAccessPolicyType;
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
      type: "StatusPageEmailAccessPolicyDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "StatusPageEmailAccessPolicyDataRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StatusPageEmailAccessPolicyType",
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
    return StatusPageEmailAccessPolicyData.attributeTypeMap;
  }

  public constructor() {}
}
