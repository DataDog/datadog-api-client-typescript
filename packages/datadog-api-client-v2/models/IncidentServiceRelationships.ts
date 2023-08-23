/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToUser } from "./RelationshipToUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The incident service's relationships.
 */
export class IncidentServiceRelationships {
  /**
   * Relationship to user.
   */
  "createdBy"?: RelationshipToUser;
  /**
   * Relationship to user.
   */
  "lastModifiedBy"?: RelationshipToUser;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    createdBy: {
      baseName: "created_by",
      type: "RelationshipToUser",
    },
    lastModifiedBy: {
      baseName: "last_modified_by",
      type: "RelationshipToUser",
    },
  };
}
