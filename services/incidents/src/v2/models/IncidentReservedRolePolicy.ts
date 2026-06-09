import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Policy for a reserved role.
 */
export class IncidentReservedRolePolicy {
  /**
   * Whether this role can only be assigned to a single responder.
   */
  "isSingle": boolean;
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
    isSingle: {
      baseName: "is_single",
      type: "boolean",
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
    return IncidentReservedRolePolicy.attributeTypeMap;
  }

  public constructor() {}
}
