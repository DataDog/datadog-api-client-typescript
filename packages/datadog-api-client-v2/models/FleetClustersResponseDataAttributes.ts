/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetClusterAttributes } from "./FleetClusterAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the fleet clusters response containing the list of clusters.
 */
export class FleetClustersResponseDataAttributes {
  /**
   * Array of clusters matching the query criteria.
   */
  "clusters"?: Array<FleetClusterAttributes>;

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
    clusters: {
      baseName: "clusters",
      type: "Array<FleetClusterAttributes>",
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
    return FleetClustersResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
