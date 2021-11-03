/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RelationshipToRoleData } from "./RelationshipToRoleData";

export class RelationshipToRoles {
  /**
   * An array containing type and ID of a role.
   */
  "data"?: Array<RelationshipToRoleData>;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    data: {
      baseName: "data",
      type: "Array<RelationshipToRoleData>",
    },
  };

  static getAttributeTypeMap() {
    return RelationshipToRoles.attributeTypeMap;
  }

  public constructor() {}
}
