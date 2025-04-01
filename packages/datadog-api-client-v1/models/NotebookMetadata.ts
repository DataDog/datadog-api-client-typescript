/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookMetadataType } from "./NotebookMetadataType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Metadata associated with the notebook.
*/
export class NotebookMetadata {
  /**
   * Whether or not the notebook is a template.
  */
  "isTemplate"?: boolean;
  /**
   * Whether or not the notebook takes snapshot image backups of the notebook's fixed-time graphs.
  */
  "takeSnapshots"?: boolean;
  /**
   * Metadata type of the notebook.
  */
  "type"?: NotebookMetadataType;

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
    "isTemplate": {
      "baseName": "is_template",
      "type": "boolean",
    },
    "takeSnapshots": {
      "baseName": "take_snapshots",
      "type": "boolean",
    },
    "type": {
      "baseName": "type",
      "type": "NotebookMetadataType",
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




    return NotebookMetadata.attributeTypeMap;

  }

  public constructor() {











  }
}









