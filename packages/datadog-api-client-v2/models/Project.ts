/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProjectAttributes } from "./ProjectAttributes";
import { ProjectRelationships } from "./ProjectRelationships";
import { ProjectResourceType } from "./ProjectResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Project
 */
export class Project {
  /**
   * Project attributes
   */
  "attributes": ProjectAttributes;
  /**
   * The Project's identifier
   */
  "id": string;
  /**
   * Project relationships
   */
  "relationships"?: ProjectRelationships;
  /**
   * Project resource type
   */
  "type": ProjectResourceType;

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
    attributes: {
      baseName: "attributes",
      type: "ProjectAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "ProjectRelationships",
    },
    type: {
      baseName: "type",
      type: "ProjectResourceType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Project.attributeTypeMap;
  }

  public constructor() {}
}
