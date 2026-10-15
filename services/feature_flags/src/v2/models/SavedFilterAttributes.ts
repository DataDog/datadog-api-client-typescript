import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SavedFilterCreationType } from "./SavedFilterCreationType";
import { SavedFilterTargetingRule } from "./SavedFilterTargetingRule";

/**
 * Saved filter details, including the full targeting rules and conditions.
 */
export class SavedFilterAttributes {
  /**
   * The time the saved filter was archived. Omitted when the filter is not archived.
   */
  "archivedAt"?: Date;
  /**
   * The time the saved filter was created.
   */
  "createdAt": Date;
  /**
   * The ID of the user who created the saved filter.
   */
  "createdBy": string;
  /**
   * How the saved filter was authored. RULES indicates rule-based authoring and LIST indicates list import. Both types return targeting rules and conditions.
   */
  "creationType": SavedFilterCreationType;
  /**
   * A description of the saved filter. Omitted when no description is set.
   */
  "description"?: string;
  /**
   * Optional JSON metadata supplied by migration tools for tracking the source of a saved filter.
   */
  "migrationMetadata"?: any;
  /**
   * The name of the saved filter.
   */
  "name": string;
  /**
   * Targeting rules combined with OR. Conditions within each rule are combined with AND. Both saved lists and saved rules use this structure.
   */
  "targetingRules": Array<SavedFilterTargetingRule>;
  /**
   * The time the saved filter was last updated.
   */
  "updatedAt": Date;
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
    archivedAt: {
      baseName: "archived_at",
      type: "Date",
      format: "date-time",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    creationType: {
      baseName: "creation_type",
      type: "SavedFilterCreationType",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    migrationMetadata: {
      baseName: "migration_metadata",
      type: "any",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    targetingRules: {
      baseName: "targeting_rules",
      type: "Array<SavedFilterTargetingRule>",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return SavedFilterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
