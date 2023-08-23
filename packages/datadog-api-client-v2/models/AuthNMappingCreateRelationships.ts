/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToRole } from "./RelationshipToRole";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship of AuthN Mapping create object to Role.
 */
export class AuthNMappingCreateRelationships {
  /**
   * Relationship to role.
   */
  "role"?: RelationshipToRole;

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
  };
}
