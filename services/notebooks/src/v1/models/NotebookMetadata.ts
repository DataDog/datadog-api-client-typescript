import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookMetadataType } from "./NotebookMetadataType";

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
