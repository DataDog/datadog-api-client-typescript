/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimestampOverrideUserRelationship } from "./TimestampOverrideUserRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships for incident timestamp override.
 */
export class IncidentTimestampOverrideRelationships {
  /**
   * Relationship to a user.
   */
  "createdByUser": TimestampOverrideUserRelationship;
  /**
   * Relationship to a user.
   */
  "lastModifiedByUser": TimestampOverrideUserRelationship;

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
    createdByUser: {
      baseName: "created_by_user",
      type: "TimestampOverrideUserRelationship",
      required: true,
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "TimestampOverrideUserRelationship",
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
    return IncidentTimestampOverrideRelationships.attributeTypeMap;
  }

  public constructor() {}
}
