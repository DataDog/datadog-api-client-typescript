import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateBackfilledMaintenanceRequestDataRelationshipsTemplateData } from "./CreateBackfilledMaintenanceRequestDataRelationshipsTemplateData";

/**
 * The template used to create the backfilled maintenance.
 */
export class CreateBackfilledMaintenanceRequestDataRelationshipsTemplate {
  /**
   * The data object identifying the template used to create the backfilled maintenance.
   */
  "data": CreateBackfilledMaintenanceRequestDataRelationshipsTemplateData;
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
    data: {
      baseName: "data",
      type: "CreateBackfilledMaintenanceRequestDataRelationshipsTemplateData",
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
    return CreateBackfilledMaintenanceRequestDataRelationshipsTemplate.attributeTypeMap;
  }

  public constructor() {}
}
