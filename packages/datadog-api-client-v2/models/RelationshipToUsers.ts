/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToUserData } from "./RelationshipToUserData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to users.
 */
export class RelationshipToUsers {
  /**
   * Relationships to user objects.
   */
  "data": Array<RelationshipToUserData>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<RelationshipToUserData>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToUsers.attributeTypeMap;
  }

  public constructor() {}
}
