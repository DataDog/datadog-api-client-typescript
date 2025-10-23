import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetDeploymentOperation } from "./FleetDeploymentOperation";

/**
 * Attributes for creating a new configuration deployment.
 */
export class FleetDeploymentConfigureAttributes {
  /**
   * Ordered list of configuration file operations to perform on the target hosts.
   */
  "configOperations": Array<FleetDeploymentOperation>;
  /**
   * Query used to filter and select target hosts for the deployment. Uses the Datadog query syntax.
   */
  "filterQuery"?: string;
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
    filterQuery: {
      baseName: "filter_query",
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
    return FleetDeploymentConfigureAttributes.attributeTypeMap;
  }

  public constructor() {}
}
