/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApiKey } from "./ApiKey";
import { ApplicationKey } from "./ApplicationKey";
import { Organization } from "./Organization";
import { User } from "./User";

import { AttributeTypeMap } from "../util";

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
   * @ignore
   */
  "unparsedObject"?: any;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OrganizationCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
