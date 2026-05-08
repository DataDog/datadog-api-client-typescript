import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A user or role that is exempt from dataset restrictions and retains unrestricted
 * access to all datasets for the product type.
 */
export class DatasetRestrictionPrincipal {
  /**
   * The unique identifier of the principal (a user UUID or role ID).
   */
  "id": string;
  /**
   * The human-readable display name of the principal as shown in the Datadog UI.
   */
  "name": string;
  /**
   * The kind of principal, such as `user` for an individual user account or `role`
   * for a Datadog role.
   */
  "type": string;
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
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return DatasetRestrictionPrincipal.attributeTypeMap;
  }

  public constructor() {}
}
