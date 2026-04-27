/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ManagedOrgsRelationshipToOrg } from "./ManagedOrgsRelationshipToOrg";
import { ManagedOrgsRelationshipToOrgs } from "./ManagedOrgsRelationshipToOrgs";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of the managed organizations resource.
 */
export class ManagedOrgsRelationships {
  /**
   * Relationship to the current organization.
   */
  "currentOrg": ManagedOrgsRelationshipToOrg;
  /**
   * Relationship to the managed organizations.
   */
  "managedOrgs": ManagedOrgsRelationshipToOrgs;

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
    currentOrg: {
      baseName: "current_org",
      type: "ManagedOrgsRelationshipToOrg",
      required: true,
    },
    managedOrgs: {
      baseName: "managed_orgs",
      type: "ManagedOrgsRelationshipToOrgs",
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
    return ManagedOrgsRelationships.attributeTypeMap;
  }

  public constructor() {}
}
