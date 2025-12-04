import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetConfigurationFile } from "./FleetConfigurationFile";
import { FleetDetectedIntegration } from "./FleetDetectedIntegration";
import { FleetIntegrationDetails } from "./FleetIntegrationDetails";

/**
 * Integrations organized by their status.
 */
export class FleetIntegrationsByStatus {
  /**
   * Configuration files for integrations.
   */
  "configurationFiles"?: Array<FleetConfigurationFile>;
  /**
   * The unique agent key identifier.
   */
  "datadogAgentKey"?: string;
  /**
   * Integrations with errors.
   */
  "errorIntegrations"?: Array<FleetIntegrationDetails>;
  /**
   * Detected but not configured integrations.
   */
  "missingIntegrations"?: Array<FleetDetectedIntegration>;
  /**
   * Integrations with warnings.
   */
  "warningIntegrations"?: Array<FleetIntegrationDetails>;
  /**
   * Integrations that are working correctly.
   */
  "workingIntegrations"?: Array<FleetIntegrationDetails>;
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
    configurationFiles: {
      baseName: "configuration_files",
      type: "Array<FleetConfigurationFile>",
    },
    datadogAgentKey: {
      baseName: "datadog_agent_key",
      type: "string",
    },
    errorIntegrations: {
      baseName: "error_integrations",
      type: "Array<FleetIntegrationDetails>",
    },
    missingIntegrations: {
      baseName: "missing_integrations",
      type: "Array<FleetDetectedIntegration>",
    },
    warningIntegrations: {
      baseName: "warning_integrations",
      type: "Array<FleetIntegrationDetails>",
    },
    workingIntegrations: {
      baseName: "working_integrations",
      type: "Array<FleetIntegrationDetails>",
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
    return FleetIntegrationsByStatus.attributeTypeMap;
  }

  public constructor() {}
}
