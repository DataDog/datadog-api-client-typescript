/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Organization } from "./Organization";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with the list of organizations.
 */
export class OrganizationListResponse {
  /**
   * Array of organization objects.
   */
  "orgs"?: Array<Organization>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    orgs: {
      baseName: "orgs",
      type: "Array<Organization>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OrganizationListResponse.attributeTypeMap;
  }

  public constructor() {}
}
