/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NullableRelationshipToUser } from "./NullableRelationshipToUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The relationships for an incident import request.
 */
export class IncidentImportRelationships {
  /**
   * Relationship to user.
   */
  "commanderUser"?: NullableRelationshipToUser;
  /**
   * Relationship to user.
   */
  "declaredByUser"?: NullableRelationshipToUser;

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
    commanderUser: {
      baseName: "commander_user",
      type: "NullableRelationshipToUser",
    },
    declaredByUser: {
      baseName: "declared_by_user",
      type: "NullableRelationshipToUser",
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
    return IncidentImportRelationships.attributeTypeMap;
  }

  public constructor() {}
}
