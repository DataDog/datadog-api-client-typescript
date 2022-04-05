/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RelationshipToUser } from "./RelationshipToUser";
import { AttributeTypeMap } from "../util";

/**
 * Resources related to the API key.
 */

export class APIKeyRelationships {
  "createdBy"?: RelationshipToUser;
  "modifiedBy"?: RelationshipToUser;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    createdBy: {
      baseName: "created_by",
      type: "RelationshipToUser",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "RelationshipToUser",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return APIKeyRelationships.attributeTypeMap;
  }

  public constructor() {}
}
