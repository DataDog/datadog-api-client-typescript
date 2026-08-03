import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentConfigureV2Package } from "./FleetDeploymentConfigureV2Package";
import { FleetDeploymentOperation } from "./FleetDeploymentOperation";

/**
 * Attributes for creating a new v2 configuration deployment.
 */
export class FleetDeploymentConfigureV2Attributes {
  /**
   * Ordered list of configuration file operations to perform on the target hosts.
   */
  "configOperations": Array<FleetDeploymentOperation>;
  /**
   * Set to `true` to validate the configuration and resolve target hosts and packages
   * without deploying anything. Returns a 200 with the validation result instead of
   * creating and starting a real deployment.
   */
  "dryRun"?: boolean;
  /**
   * Query used to filter and select target hosts for the deployment. Uses the Datadog query syntax.
   */
  "filterQuery": string;
  /**
   * List of packages and their target versions to additionally deploy alongside
   * the configuration change.
   */
  "targetPackages"?: Array<FleetDeploymentConfigureV2Package>;
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
    configOperations: {
      baseName: "config_operations",
      type: "Array<FleetDeploymentOperation>",
      required: true,
    },
    dryRun: {
      baseName: "dry_run",
      type: "boolean",
    },
    filterQuery: {
      baseName: "filter_query",
      type: "string",
      required: true,
    },
    targetPackages: {
      baseName: "target_packages",
      type: "Array<FleetDeploymentConfigureV2Package>",
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
    return FleetDeploymentConfigureV2Attributes.attributeTypeMap;
  }

  public constructor() {}
}
