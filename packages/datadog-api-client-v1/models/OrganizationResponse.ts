/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Organization } from "./Organization";

import { AttributeTypeMap } from "../util";

/**
 * Response with an organization.
 */
export class OrganizationResponse {
  /**
   * Create, edit, and manage organizations.
   */
  "org"?: Organization;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    org: {
      baseName: "org",
      type: "Organization",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OrganizationResponse.attributeTypeMap;
  }

  public constructor() {}
}
