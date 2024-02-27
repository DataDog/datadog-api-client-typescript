/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProjectResourceType } from "./ProjectResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to project object
 */
export class ProjectRelationshipData {
  /**
   * A unique identifier that represents the project
   */
  "id": string;
  /**
   * Project resource type
   */
  "type": ProjectResourceType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProjectResourceType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProjectRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
