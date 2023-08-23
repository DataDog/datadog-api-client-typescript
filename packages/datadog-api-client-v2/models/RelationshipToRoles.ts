/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToRoleData } from "./RelationshipToRoleData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to roles.
 */
export class RelationshipToRoles {
  /**
   * An array containing type and the unique identifier of a role.
   */
  "data"?: Array<RelationshipToRoleData>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "Array<RelationshipToRoleData>",
    },
  };
}
