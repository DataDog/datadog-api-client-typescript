import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApiKey } from "./ApiKey";
import { ApplicationKey } from "./ApplicationKey";
import { Organization } from "./Organization";
import { User } from "./User";

/**
 * Response object for an organization creation.
 */
export class OrganizationCreateResponse {
  /**
   * Datadog API key.
   */
  "apiKey"?: ApiKey;
  /**
   * An application key with its associated metadata.
   */
  "applicationKey"?: ApplicationKey;
  /**
   * Create, edit, and manage organizations.
   */
  "org"?: Organization;
  /**
   * Create, edit, and disable users.
   */
  "user"?: User;
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
    apiKey: {
      baseName: "api_key",
      type: "ApiKey",
    },
    applicationKey: {
      baseName: "application_key",
      type: "ApplicationKey",
    },
    org: {
      baseName: "org",
      type: "Organization",
    },
    user: {
      baseName: "user",
      type: "User",
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
    return OrganizationCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
