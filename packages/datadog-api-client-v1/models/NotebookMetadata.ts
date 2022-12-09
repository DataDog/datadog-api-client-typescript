/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookMetadataType } from "./NotebookMetadataType";

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
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    isTemplate: {
      baseName: "is_template",
      type: "boolean",
    },
    takeSnapshots: {
      baseName: "take_snapshots",
      type: "boolean",
    },
    type: {
      baseName: "type",
      type: "NotebookMetadataType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookMetadata.attributeTypeMap;
  }

  public constructor() {}
}
