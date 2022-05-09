/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToRoleData } from "./RelationshipToRoleData";

import { AttributeTypeMap } from "../util";

/**
 * Relationship to role.
 */
export class RelationshipToRole {
  /**
   * Relationship to role object.
   */
  "data"?: RelationshipToRoleData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "RelationshipToRoleData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToRole.attributeTypeMap;
  }

  public constructor() {}
}
