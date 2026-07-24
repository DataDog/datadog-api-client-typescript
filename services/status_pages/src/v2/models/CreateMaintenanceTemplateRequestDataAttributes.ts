import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes for creating a maintenance template.
 */
export class CreateMaintenanceTemplateRequestDataAttributes {
  /**
   * The description shown when a maintenance created from this template is completed.
   */
  "completedDescription"?: string;
  /**
   * The IDs of the components affected by a maintenance created from this template.
   */
  "componentIds"?: Array<string>;
  /**
   * The description shown while a maintenance created from this template is in progress.
   */
  "inProgressDescription"?: string;
  /**
   * The title used for a maintenance created from this template.
   */
  "maintenanceTitle"?: string;
  /**
   * The name of the maintenance template.
   */
  "name": string;
  /**
   * The description shown when a maintenance created from this template is scheduled.
   */
  "scheduledDescription"?: string;
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
    completedDescription: {
      baseName: "completed_description",
      type: "string",
    },
    componentIds: {
      baseName: "component_ids",
      type: "Array<string>",
    },
    inProgressDescription: {
      baseName: "in_progress_description",
      type: "string",
    },
    maintenanceTitle: {
      baseName: "maintenance_title",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    scheduledDescription: {
      baseName: "scheduled_description",
      type: "string",
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
    return CreateMaintenanceTemplateRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
