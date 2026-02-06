import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookSearchUser } from "./NotebookSearchUser";

/**
 * Metadata about the notebook.
 */
export class NotebookSearchMetadata {
  /**
   * User information.
   */
  "author": NotebookSearchUser;
  /**
   * Number of cells in the notebook.
   */
  "cellCount": number;
  /**
   * Time at which the notebook was created.
   */
  "createdAt": Date;
  /**
   * Time at which the notebook was deleted, or null if not deleted.
   */
  "deletedAt": Date | null;
  /**
   * Experience type of the notebook.
   */
  "experienceType": string | null;
  /**
   * Whether the notebook has computational cells.
   */
  "hasComputationalCells": boolean;
  /**
   * Whether the notebook is favorited by the user.
   */
  "isFavorited": boolean;
  /**
   * Whether the notebook is a template.
   */
  "isTemplate": boolean;
  /**
   * Time at which the notebook was last updated.
   */
  "modifiedAt": Date;
  /**
   * Status of the notebook.
   */
  "status": string;
  /**
   * Whether the notebook can take a snapshot.
   */
  "takeSnapshots": boolean;
  /**
   * Notebook type.
   */
  "type": string;
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
    author: {
      baseName: "author",
      type: "NotebookSearchUser",
      required: true,
    },
    cellCount: {
      baseName: "cell_count",
      type: "number",
      required: true,
      format: "int64",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    experienceType: {
      baseName: "experience_type",
      type: "string",
      required: true,
    },
    hasComputationalCells: {
      baseName: "has_computational_cells",
      type: "boolean",
      required: true,
    },
    isFavorited: {
      baseName: "is_favorited",
      type: "boolean",
      required: true,
    },
    isTemplate: {
      baseName: "is_template",
      type: "boolean",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    takeSnapshots: {
      baseName: "take_snapshots",
      type: "boolean",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return NotebookSearchMetadata.attributeTypeMap;
  }

  public constructor() {}
}
