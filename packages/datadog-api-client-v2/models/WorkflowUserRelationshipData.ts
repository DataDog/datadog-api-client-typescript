/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WorkflowUserRelationshipType } from "./WorkflowUserRelationshipType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `WorkflowUserRelationshipData` object.
 */
export class WorkflowUserRelationshipData {
  /**
   * The user identifier
   */
  "id": string;
  /**
   * The definition of `WorkflowUserRelationshipType` object.
   */
  "type": WorkflowUserRelationshipType;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WorkflowUserRelationshipType",
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
    return WorkflowUserRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
