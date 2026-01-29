import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationIncidentFieldMappingsItems } from "./IntegrationIncidentFieldMappingsItems";
import { IntegrationIncidentSeverityConfig } from "./IntegrationIncidentSeverityConfig";

/**
 * Incident integration settings
 */
export class IntegrationIncident {
  /**
   * Query for auto-escalation
   */
  "autoEscalationQuery"?: string;
  /**
   * Default incident commander
   */
  "defaultIncidentCommander"?: string;
  /**
   * Whether incident integration is enabled
   */
  "enabled"?: boolean;
  "fieldMappings"?: Array<IntegrationIncidentFieldMappingsItems>;
  /**
   * Incident type
   */
  "incidentType"?: string;
  "severityConfig"?: IntegrationIncidentSeverityConfig;
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
    autoEscalationQuery: {
      baseName: "auto_escalation_query",
      type: "string",
    },
    defaultIncidentCommander: {
      baseName: "default_incident_commander",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    fieldMappings: {
      baseName: "field_mappings",
      type: "Array<IntegrationIncidentFieldMappingsItems>",
    },
    incidentType: {
      baseName: "incident_type",
      type: "string",
    },
    severityConfig: {
      baseName: "severity_config",
      type: "IntegrationIncidentSeverityConfig",
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
    return IntegrationIncident.attributeTypeMap;
  }

  public constructor() {}
}
