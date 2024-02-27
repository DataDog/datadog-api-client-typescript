/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProjectRelationshipData } from "./ProjectRelationshipData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to project
 */
export class ProjectRelationship {
  /**
   * Relationship to project object
   */
  "data": ProjectRelationshipData;

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
      type: "ProjectRelationshipData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProjectRelationship.attributeTypeMap;
  }

  public constructor() {}
}
