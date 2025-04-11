import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserTeamRole } from "./UserTeamRole";

/**
 * Team membership attributes
 */
export class UserTeamAttributes {
  /**
   * The mechanism responsible for provisioning the team relationship.
   * Possible values: null for added by a user, "service_account" if added by a service account, and "saml_mapping" if provisioned via SAML mapping.
   */
  "provisionedBy"?: string;
  /**
   * UUID of the User or Service Account who provisioned this team membership, or null if provisioned via SAML mapping.
   */
  "provisionedById"?: string;
  /**
   * The user's role within the team
   */
  "role"?: UserTeamRole;
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
    provisionedBy: {
      baseName: "provisioned_by",
      type: "string",
    },
    provisionedById: {
      baseName: "provisioned_by_id",
      type: "string",
    },
    role: {
      baseName: "role",
      type: "UserTeamRole",
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
    return UserTeamAttributes.attributeTypeMap;
  }

  public constructor() {}
}
