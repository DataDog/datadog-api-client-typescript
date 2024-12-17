/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentRelationshipData } from "./DeploymentRelationshipData";
import { DeploymentRelationshipMeta } from "./DeploymentRelationshipMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `DeploymentRelationship` object.
 */
export class DeploymentRelationship {
  /**
   * The definition of `DeploymentRelationshipData` object.
   */
  "data"?: DeploymentRelationshipData;
  /**
   * The definition of `DeploymentRelationshipMeta` object.
   */
  "meta"?: DeploymentRelationshipMeta;

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
      type: "DeploymentRelationshipData",
    },
    meta: {
      baseName: "meta",
      type: "DeploymentRelationshipMeta",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DeploymentRelationship.attributeTypeMap;
  }

  public constructor() {}
}
