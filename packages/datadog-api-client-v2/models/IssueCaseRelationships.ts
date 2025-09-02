/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NullableUserRelationship } from "./NullableUserRelationship";
import { ProjectRelationship } from "./ProjectRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Resources related to a case.
 */
export class IssueCaseRelationships {
  /**
   * Relationship to user.
   */
  "assignee"?: NullableUserRelationship;
  /**
   * Relationship to user.
   */
  "createdBy"?: NullableUserRelationship;
  /**
   * Relationship to user.
   */
  "modifiedBy"?: NullableUserRelationship;
  /**
   * Relationship to project
   */
  "project"?: ProjectRelationship;

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
    assignee: {
      baseName: "assignee",
      type: "NullableUserRelationship",
    },
    createdBy: {
      baseName: "created_by",
      type: "NullableUserRelationship",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "NullableUserRelationship",
    },
    project: {
      baseName: "project",
      type: "ProjectRelationship",
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
    return IssueCaseRelationships.attributeTypeMap;
  }

  public constructor() {}
}
