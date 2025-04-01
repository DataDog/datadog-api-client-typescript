/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookResourceType } from "./NotebookResourceType";
import { NotebookUpdateDataAttributes } from "./NotebookUpdateDataAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The data for a notebook update request.
*/
export class NotebookUpdateData {
  /**
   * The data attributes of a notebook.
  */
  "attributes": NotebookUpdateDataAttributes;
  /**
   * Type of the Notebook resource.
  */
  "type": NotebookResourceType;

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
      "type": "NotebookUpdateDataAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "NotebookResourceType",
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




    return NotebookUpdateData.attributeTypeMap;

  }

  public constructor() {











  }
}









