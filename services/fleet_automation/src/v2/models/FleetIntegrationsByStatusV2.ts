import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetConfigurationFileV2 } from "./FleetConfigurationFileV2";
import { FleetDetectedIntegration } from "./FleetDetectedIntegration";
import { FleetIntegrationDetailsV2 } from "./FleetIntegrationDetailsV2";

/**
 * Integrations organized by their status.
 */
export class FleetIntegrationsByStatusV2 {
  /**
   * Configuration files for integrations.
   */
  "configurationFiles"?: Array<FleetConfigurationFileV2>;
  /**
   * Integrations with errors.
   */
  "errorIntegrations"?: Array<FleetIntegrationDetailsV2>;
  /**
   * Detected but not configured integrations.
   */
  "missingIntegrations"?: Array<FleetDetectedIntegration>;
  /**
   * Integrations with warnings.
   */
  "warningIntegrations"?: Array<FleetIntegrationDetailsV2>;
  /**
   * Integrations that are working correctly.
   */
  "workingIntegrations"?: Array<FleetIntegrationDetailsV2>;
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
      type: "Array<FleetConfigurationFileV2>",
    },
    errorIntegrations: {
      baseName: "error_integrations",
      type: "Array<FleetIntegrationDetailsV2>",
    },
    missingIntegrations: {
      baseName: "missing_integrations",
      type: "Array<FleetDetectedIntegration>",
    },
    warningIntegrations: {
      baseName: "warning_integrations",
      type: "Array<FleetIntegrationDetailsV2>",
    },
    workingIntegrations: {
      baseName: "working_integrations",
      type: "Array<FleetIntegrationDetailsV2>",
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
    return FleetIntegrationsByStatusV2.attributeTypeMap;
  }

  public constructor() {}
}
