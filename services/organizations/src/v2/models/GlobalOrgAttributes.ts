import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GlobalOrg } from "./GlobalOrg";
import { GlobalOrgUser } from "./GlobalOrgUser";

/**
 * Attributes of an organization associated with the authenticated user.
 */
export class GlobalOrgAttributes {
  /**
   * Organization information for a global organization association.
   */
  "org": GlobalOrg;
  /**
   * The login URL used to switch into the organization, if available.
   */
  "redirectUrl"?: string;
  /**
   * The source region of the organization.
   */
  "sourceRegion": string;
  /**
   * User information for a global organization association.
   */
  "user": GlobalOrgUser;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    org: {
      baseName: "org",
      type: "GlobalOrg",
      required: true,
    },
    redirectUrl: {
      baseName: "redirect_url",
      type: "string",
    },
    sourceRegion: {
      baseName: "source_region",
      type: "string",
      required: true,
    },
    user: {
      baseName: "user",
      type: "GlobalOrgUser",
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
    return GlobalOrgAttributes.attributeTypeMap;
  }

  public constructor() {}
}
