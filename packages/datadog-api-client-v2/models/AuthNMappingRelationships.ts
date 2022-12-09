/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToRole } from "./RelationshipToRole";
import { RelationshipToSAMLAssertionAttribute } from "./RelationshipToSAMLAssertionAttribute";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * All relationships associated with AuthN Mapping.
 */
export class AuthNMappingRelationships {
  /**
   * Relationship to role.
   */
  "role"?: RelationshipToRole;
  /**
   * AuthN Mapping relationship to SAML Assertion Attribute.
   */
  "samlAssertionAttribute"?: RelationshipToSAMLAssertionAttribute;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    role: {
      baseName: "role",
      type: "RelationshipToRole",
    },
    samlAssertionAttribute: {
      baseName: "saml_assertion_attribute",
      type: "RelationshipToSAMLAssertionAttribute",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuthNMappingRelationships.attributeTypeMap;
  }

  public constructor() {}
}
