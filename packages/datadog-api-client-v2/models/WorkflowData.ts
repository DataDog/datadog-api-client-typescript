/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WorkflowDataAttributes } from "./WorkflowDataAttributes";
import { WorkflowDataRelationships } from "./WorkflowDataRelationships";
import { WorkflowDataType } from "./WorkflowDataType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data related to the workflow.
*/
export class WorkflowData {
  /**
   * The definition of `WorkflowDataAttributes` object.
  */
  "attributes": WorkflowDataAttributes;
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
    "attributes": {
      "baseName": "attributes",
      "type": "WorkflowDataAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "relationships": {
      "baseName": "relationships",
      "type": "WorkflowDataRelationships",
    },
    "type": {
      "baseName": "type",
      "type": "WorkflowDataType",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return WorkflowData.attributeTypeMap;

  }

  public constructor() {











  }
}









