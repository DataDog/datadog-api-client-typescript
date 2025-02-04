/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WorkflowUserRelationship } from "./WorkflowUserRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `WorkflowDataRelationships` object.
 */
export class WorkflowDataRelationships {
  /**
   * The definition of `WorkflowUserRelationship` object.
   */
  "creator"?: WorkflowUserRelationship;
  /**
   * The definition of `WorkflowUserRelationship` object.
   */
  "owner"?: WorkflowUserRelationship;

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
    creator: {
      baseName: "creator",
      type: "WorkflowUserRelationship",
    },
    owner: {
      baseName: "owner",
      type: "WorkflowUserRelationship",
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
    return WorkflowDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
