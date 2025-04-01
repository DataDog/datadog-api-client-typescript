/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsPrivateLocation } from "./SyntheticsPrivateLocation";
import { SyntheticsPrivateLocationCreationResponseResultEncryption } from "./SyntheticsPrivateLocationCreationResponseResultEncryption";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object that contains the new private location, the public key for result encryption, and the configuration skeleton.
*/
export class SyntheticsPrivateLocationCreationResponse {
  /**
   * Configuration skeleton for the private location. See installation instructions of the private location on how to use this configuration.
  */
  "config"?: any;
  /**
   * Object containing information about the private location to create.
  */
  "privateLocation"?: SyntheticsPrivateLocation;
  /**
   * Public key for the result encryption.
  */
  "resultEncryption"?: SyntheticsPrivateLocationCreationResponseResultEncryption;

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
    "config": {
      "baseName": "config",
      "type": "any",
    },
    "privateLocation": {
      "baseName": "private_location",
      "type": "SyntheticsPrivateLocation",
    },
    "resultEncryption": {
      "baseName": "result_encryption",
      "type": "SyntheticsPrivateLocationCreationResponseResultEncryption",
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




    return SyntheticsPrivateLocationCreationResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









