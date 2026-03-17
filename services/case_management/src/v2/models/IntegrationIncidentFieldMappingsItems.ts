import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Mapping between an incident user-defined field and a case field
 */
export class IntegrationIncidentFieldMappingsItems {
  /**
   * The case field to map the incident field value to
   */
  "caseField"?: string;
  /**
   * The identifier of the incident user-defined field to map from
   */
  "incidentUserDefinedFieldId"?: string;
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
    caseField: {
      baseName: "case_field",
      type: "string",
    },
    incidentUserDefinedFieldId: {
      baseName: "incident_user_defined_field_id",
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
    return IntegrationIncidentFieldMappingsItems.attributeTypeMap;
  }

  public constructor() {}
}
