/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetDeploymentOperation } from "./FleetDeploymentOperation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
