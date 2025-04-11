import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsPrivateLocation } from "./SyntheticsPrivateLocation";
import { SyntheticsPrivateLocationCreationResponseResultEncryption } from "./SyntheticsPrivateLocationCreationResponseResultEncryption";

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
    config: {
      baseName: "config",
      type: "any",
    },
    privateLocation: {
      baseName: "private_location",
      type: "SyntheticsPrivateLocation",
    },
    resultEncryption: {
      baseName: "result_encryption",
      type: "SyntheticsPrivateLocationCreationResponseResultEncryption",
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
    return SyntheticsPrivateLocationCreationResponse.attributeTypeMap;
  }

  public constructor() {}
}
