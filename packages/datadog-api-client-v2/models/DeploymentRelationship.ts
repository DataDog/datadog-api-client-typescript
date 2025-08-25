/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentMetadata } from "./DeploymentMetadata";
import { DeploymentRelationshipData } from "./DeploymentRelationshipData";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Information pointing to the app's publication status.
*/
export class DeploymentRelationship {
  /**
   * Data object containing the deployment ID.
  */
  "data"?: DeploymentRelationshipData;
  /**
   * Metadata object containing the publication creation information.
  */
  "meta"?: DeploymentMetadata;

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
    "data": {
      "baseName": "data",
      "type": "DeploymentRelationshipData",
    },
    "meta": {
      "baseName": "meta",
      "type": "DeploymentMetadata",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return DeploymentRelationship.attributeTypeMap;

  }

  public constructor() {











  }
}









