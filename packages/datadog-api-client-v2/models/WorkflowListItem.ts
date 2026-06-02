/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WorkflowDataRelationships } from "./WorkflowDataRelationships";
import { WorkflowDataType } from "./WorkflowDataType";
import { WorkflowListItemAttributes } from "./WorkflowListItemAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A workflow returned by the list workflows endpoint.
 */
export class WorkflowListItem {
  /**
   * The definition of `WorkflowListItemAttributes` object.
   */
  "attributes": WorkflowListItemAttributes;
  /**
   * The workflow identifier
   */
  "id"?: string;
  /**
   * The definition of `WorkflowDataRelationships` object.
   */
  "relationships"?: WorkflowDataRelationships;
  /**
   * The definition of `WorkflowDataType` object.
   */
  "type": WorkflowDataType;

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
      type: "WorkflowListItemAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "WorkflowDataRelationships",
    },
    type: {
      baseName: "type",
      type: "WorkflowDataType",
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
    return WorkflowListItem.attributeTypeMap;
  }

  public constructor() {}
}
