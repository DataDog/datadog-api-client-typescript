/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GlobalOrgIdentifier } from "./GlobalOrgIdentifier";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for adding organizations to an org group.
 */
export class OrgGroupMembershipCreateAttributes {
  /**
   * List of organizations to add. Between 1 and 100 per request. Each `org_uuid` and `org_site` pair must be unique.
   */
  "orgs": Array<GlobalOrgIdentifier>;

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
    orgs: {
      baseName: "orgs",
      type: "Array<GlobalOrgIdentifier>",
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
    return OrgGroupMembershipCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
