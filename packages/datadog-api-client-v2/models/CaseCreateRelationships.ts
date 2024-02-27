/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NullableUserRelationship } from "./NullableUserRelationship";
import { ProjectRelationship } from "./ProjectRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships formed with the case on creation
 */
export class CaseCreateRelationships {
  /**
   * Relationship to user.
   */
  "assignee"?: NullableUserRelationship;
  /**
   * Relationship to project
   */
  "project": ProjectRelationship;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    assignee: {
      baseName: "assignee",
      type: "NullableUserRelationship",
    },
    project: {
      baseName: "project",
      type: "ProjectRelationship",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CaseCreateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
